import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, LayoutDashboard, MessageCircle, GraduationCap, Sparkles } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
import FloatingParticles from "../components/FloatingParticles";
import Navbar from "../components/Navbar";

const heroButtons = [
    { label: "Start Learning", icon: BookOpen, path: "/dashboard", delay: 0.6 },
    { label: "View Dashboard", icon: LayoutDashboard, path: "/dashboard", delay: 0.7 },
    { label: "Open Chat", icon: MessageCircle, path: "/chat", delay: 0.8 },
];

const Index = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />
            <FloatingParticles />
            <Navbar />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                {/* Floating icons */}
                <motion.div
                    className="absolute top-32 left-[15%] text-primary/20"
                    animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >
                    <GraduationCap className="w-10 h-10" />
                </motion.div>
                <motion.div
                    className="absolute bottom-32 right-[15%] text-accent/20"
                    animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                >
                    <Sparkles className="w-8 h-8" />
                </motion.div>

                {/* Main content */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-4">
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
                        <Sparkles className="w-3 h-3 text-primary" />
                        Emotion-Aware Study Companion
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-heading text-5xl sm:text-7xl font-bold mb-4 gradient-text text-glow"
                >
                    MINDMITRA AI
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl text-muted-foreground mb-12 font-light tracking-wide"
                >
                    Learn • Focus • Crack Confidently
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4">
                    {heroButtons.map((btn) => (
                        <motion.div
                            key={btn.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: btn.delay }}
                        >
                            <Link
                                to={btn.path}
                                className="group glass hover-lift flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-medium text-foreground hover:glow-primary transition-all duration-300"
                            >
                                <btn.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                {btn.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-16 flex flex-wrap justify-center gap-3"
                >
                    {["GATE", "UPSC", "JEE", "CAT"].map((exam) => (
                        <span key={exam} className="glass rounded-full px-4 py-1.5 text-xs font-medium text-primary/70 tracking-wider">
                            {exam}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Index;
