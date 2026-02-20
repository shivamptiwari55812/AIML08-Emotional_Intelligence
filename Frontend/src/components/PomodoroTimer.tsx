import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";

const TOTAL_SECONDS = 25 * 60; // 25 minutes
const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const PomodoroTimer = () => {
    const [seconds, setSeconds] = useState(TOTAL_SECONDS);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const progress = 1 - seconds / TOTAL_SECONDS;
    const dashOffset = CIRCUMFERENCE * (1 - progress);

    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const stop = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);

    useEffect(() => {
        if (running && seconds > 0) {
            intervalRef.current = setInterval(() => {
                setSeconds((s) => {
                    if (s <= 1) {
                        stop();
                        setRunning(false);
                        return 0;
                    }
                    return s - 1;
                });
            }, 1000);
        }
        return stop;
    }, [running, stop]);

    const toggle = () => setRunning((r) => !r);
    const reset = () => {
        stop();
        setRunning(false);
        setSeconds(TOTAL_SECONDS);
    };

    return (
        <div className="flex flex-col items-center gap-5">
            {/* Progress Ring */}
            <div className="relative w-36 h-36">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="hsl(var(--muted))" strokeWidth="8" opacity={0.3} />
                    <motion.circle
                        cx="60"
                        cy="60"
                        r={RADIUS}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        animate={{ strokeDashoffset: dashOffset }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.5))" }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-3xl font-bold text-foreground tabular-nums">
                        {String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}
                    </span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggle}
                    className="w-11 h-11 rounded-xl bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-colors hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
                >
                    {running ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={reset}
                    className="w-11 h-11 rounded-xl bg-muted/30 hover:bg-muted/50 flex items-center justify-center text-muted-foreground transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                </motion.button>
            </div>
        </div>
    );
};

export default PomodoroTimer;
