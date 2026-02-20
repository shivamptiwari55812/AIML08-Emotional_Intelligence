// import { useLocation, useNavigate } from "react-router-dom";
// import { Home, MessageCircle, BarChart3, BookOpen } from "lucide-react";

// const tabs = [
//     { path: "/", label: "Home", icon: Home },
//     { path: "/chat", label: "Chat", icon: MessageCircle },
//     { path: "/progress", label: "Progress", icon: BarChart3 },
//     { path: "/exams", label: "Exams", icon: BookOpen },
// ];

// const BottomNav = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     return (
//         <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
//             <div className="glass-strong flex items-center justify-around p-2 gap-1">
//                 {tabs.map((tab) => {
//                     const isActive = location.pathname === tab.path;
//                     const Icon = tab.icon;
//                     return (
//                         <button
//                             key={tab.path}
//                             onClick={() => navigate(tab.path)}
//                             className={`
//                 flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 min-w-[60px]
//                 ${isActive ? "bg-primary/20 neon-border shadow-lg scale-105" : "hover:bg-foreground/5 hover:scale-105"}
//               `}
//                         >
//                             <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-neon" : "text-muted-foreground"}`} />
//                             <span className={`text-[10px] font-medium transition-colors ${isActive ? "neon-text" : "text-muted-foreground"}`}>
//                                 {tab.label}
//                             </span>
//                         </button>
//                     );
//                 })}
//             </div>
//         </nav>
//     );
// };

// export default BottomNav;
