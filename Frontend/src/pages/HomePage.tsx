// import { useState } from "react";
// import { Clock, Target, Flame, Sparkles } from "lucide-react";
// import AppLayout from "../components/AppLayout";

// const emotions = [
//     { emoji: "😊", label: "Happy", color: "from-yellow-400 to-amber-500", orbColor: "#f59e0b" },
//     { emoji: "😰", label: "Stressed", color: "from-red-400 to-rose-500", orbColor: "#ef4444" },
//     { emoji: "💪", label: "Motivated", color: "from-primary to-accent-blue", orbColor: "#667eea" },
//     { emoji: "😐", label: "Neutral", color: "from-muted-foreground to-muted", orbColor: "#94a3b8" },
// ];

// const metrics = [
//     { label: "Session Time", value: "45 min", icon: Clock, accent: "primary" },
//     { label: "Accuracy", value: "92%", icon: Target, accent: "accent-blue" },
//     { label: "Streak", value: "🔥 7 days", icon: Flame, accent: "accent-pink" },
// ];

// const HomePage = () => {
//     const [activeEmotion, setActiveEmotion] = useState(0);

//     return (
//         <AppLayout>
//             <div className="flex flex-col items-center pt-12 sm:pt-16 gap-8">
//                 {/* Hero Title */}
//                 <div className="text-center animate-slide-up">
//                     <div className="inline-flex items-center gap-2 glass px-4 py-1.5 mb-4 text-xs font-medium text-neon">
//                         <Sparkles className="w-3 h-3" />
//                         LearnSphere Technologies
//                     </div>
//                     <h1 className="text-3xl sm:text-5xl font-display font-bold leading-tight">
//                         <span className="gradient-text">Emotion-Aware</span>
//                         <br />
//                         <span className="text-foreground">Study Assistant</span>
//                     </h1>
//                     <p className="mt-3 text-muted-foreground text-sm max-w-md mx-auto">
//                         AI-powered study sessions that adapt to how you feel. GATE · UPSC · JEE · CAT
//                     </p>
//                 </div>

//                 {/* Emotion Orb */}
//                 <div className="relative animate-slide-up" style={{ animationDelay: "0.1s" }}>
//                     <div
//                         className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-5xl sm:text-6xl animate-orb-pulse relative z-10 glass-strong cursor-pointer"
//                         style={{
//                             boxShadow: `0 0 40px ${emotions[activeEmotion].orbColor}40, 0 0 80px ${emotions[activeEmotion].orbColor}20`,
//                         }}
//                     >
//                         {emotions[activeEmotion].emoji}
//                     </div>
//                     {/* Ripple ring */}
//                     <div
//                         className="absolute inset-0 rounded-full border-2 opacity-30"
//                         style={{
//                             borderColor: emotions[activeEmotion].orbColor,
//                             animation: "ripple 2s ease-out infinite",
//                         }}
//                     />
//                 </div>

//                 {/* Emoji Reaction Buttons */}
//                 <div className="flex gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
//                     {emotions.map((emotion, i) => (
//                         <button
//                             key={emotion.label}
//                             onClick={() => setActiveEmotion(i)}
//                             className={`
//                 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl
//                 transition-all duration-300 active:scale-95
//                 ${activeEmotion === i ? "glass-strong neon-border scale-110" : "glass hover:scale-105"}
//               `}
//                         >
//                             {emotion.emoji}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Current mood label */}
//                 <p className="text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.25s" }}>
//                     Current mood: <span className="text-foreground font-medium">{emotions[activeEmotion].label}</span>
//                 </p>

//                 {/* Metrics Cards */}
//                 <div className="grid grid-cols-3 gap-3 w-full max-w-lg animate-slide-up" style={{ animationDelay: "0.3s" }}>
//                     {metrics.map((metric) => {
//                         const Icon = metric.icon;
//                         return (
//                             <div
//                                 key={metric.label}
//                                 className="glass p-4 text-center animate-float hover:scale-105 transition-transform"
//                                 style={{ animationDelay: `${Math.random() * 2}s` }}
//                             >
//                                 <Icon className={`w-5 h-5 mx-auto mb-2 text-${metric.accent}`} />
//                                 <p className="text-lg sm:text-xl font-bold font-display text-foreground">{metric.value}</p>
//                                 <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{metric.label}</p>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </AppLayout>
//     );
// };

// export default HomePage;
