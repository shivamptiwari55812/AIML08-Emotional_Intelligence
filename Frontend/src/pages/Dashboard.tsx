import { motion } from "framer-motion";
import { Flame, Zap, BookMarked, Coffee, MessageCircle, Play, Timer } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import FloatingParticles from "../components/FloatingParticles";
import Navbar from "../components/Navbar";
import EmotionIndicator from "../components/EmotionIndicator";
import PomodoroTimer from "../components/PomodoroTimer";
import type { Emotion } from "../components/EmotionIndicator";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const topics = ["Data Structures", "Linear Algebra", "Indian Polity", "Quant Aptitude", "OS Concepts", "Calculus"];

const Dashboard = () => {
    const [streak] = useState(12);
    const [emotion] = useState<Emotion>("focused");

    return (
        <div className="min-h-screen relative">
            <AnimatedBackground />
            <FloatingParticles />
            <Navbar />

            <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-heading text-3xl font-bold mb-8 text-foreground"
                >
                    Dashboard
                </motion.h1>

                <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Study Streak */}
                    {/* <motion.div variants={item} className="glass rounded-2xl p-6 hover-lift cursor-default group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-emotion-happy/10 flex items-center justify-center">
                                <Flame className="w-5 h-5 text-emotion-happy" />
                            </div>
                            <h3 className="font-heading font-semibold text-foreground">Study Streak</h3>
                        </div>
                        <motion.div
                            className="text-5xl font-heading font-bold gradient-text"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", bounce: 0.4, delay: 0.3 }}
                        >
                            {streak}
                            <span className="text-lg text-muted-foreground font-normal ml-2">days</span>
                        </motion.div>
                    </motion.div> */}
                    {/* Motivation */}
                    <motion.div variants={item} className="glass rounded-2xl p-6 hover-lift cursor-default">
                        <h3 className="font-heading font-semibold text-foreground mb-3">Motivation</h3>
                        <p className="text-sm text-muted-foreground italic">“Small progress each day leads to big results.”</p>
                    </motion.div>

                    {/* Daily Progress */}
                    <motion.div variants={item} className="glass rounded-2xl p-6 hover-lift cursor-default">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-heading font-semibold text-foreground">Daily Progress</h3>
                        </div>

                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                            <motion.div
                                className="bg-primary h-3 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "65%" }}
                                transition={{ duration: 1 }}
                            />
                        </div>

                        <p className="text-sm text-muted-foreground mt-2">65% of today’s goal completed</p>
                    </motion.div>

                    {/* Current Mood */}
                    <motion.div variants={item} className="glass rounded-2xl p-6 hover-lift cursor-default">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-heading font-semibold text-foreground">Current Mood</h3>
                        </div>
                        <EmotionIndicator emotion={emotion} />
                        <p className="mt-3 text-sm text-muted-foreground">You seem focused today — great time to tackle tough topics!</p>
                    </motion.div>

                    {/* Pomodoro Timer */}
                    <motion.div variants={item} className="glass rounded-2xl p-6 hover-lift cursor-default">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-emotion-focused/10 flex items-center justify-center">
                                <Timer className="w-5 h-5 text-emotion-focused" />
                            </div>
                            <h3 className="font-heading font-semibold text-foreground">Pomodoro Timer</h3>
                        </div>
                        <PomodoroTimer />
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={item} className="glass rounded-2xl p-6 hover-lift cursor-default">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                <Play className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link
                                to="/chat"
                                className="flex items-center gap-2 glass rounded-lg px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors"
                            >
                                <Play className="w-4 h-4 text-primary" /> Start Session
                            </Link>
                            <button className="flex items-center gap-2 glass rounded-lg px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 transition-colors text-left">
                                <Coffee className="w-4 h-4 text-accent" /> Take a Break
                            </button>
                            <Link
                                to="/chat"
                                className="flex items-center gap-2 glass rounded-lg px-4 py-2.5 text-sm text-foreground hover:bg-secondary/10 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4 text-secondary" /> Open Chat
                            </Link>
                        </div>
                    </motion.div>

                    {/* Emotion Analytics */}
                    <motion.div variants={item} className="glass rounded-2xl p-6 hover-lift">
                        <h3 className="font-heading font-semibold text-foreground mb-4">Emotion Analytics</h3>

                        <EmotionPieChart />

                        <p className="text-sm text-muted-foreground mt-3">Your focus dominates today — keep the momentum 🚀</p>
                    </motion.div>

                    {/* Topics To Review */}
                    <motion.div variants={item} className="glass rounded-2xl p-6 hover-lift cursor-default md:col-span-2 lg:col-span-3">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <BookMarked className="w-5 h-5 text-secondary" />
                            </div>
                            <h3 className="font-heading font-semibold text-foreground">Topics to Review</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {topics.map((topic, i) => (
                                <motion.button
                                    key={topic}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.08 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="glass rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 border border-transparent hover:border-primary/20"
                                >
                                    {topic}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

const EmotionPieChart = () => {
    const data = [
        { name: "Focused", value: 50 },
        { name: "Happy", value: 20 },
        { name: "Calm", value: 15 },
        { name: "Stressed", value: 15 },
    ];

    const COLORS = ["#6366f1", "#22c55e", "#38bdf8", "#ef4444"];
    return (
        <div className="w-full h-52">
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;
