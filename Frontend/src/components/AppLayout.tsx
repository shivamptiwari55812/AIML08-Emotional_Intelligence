// import type { ReactNode } from "react";

// const AppLayout = ({ children }: { children: ReactNode }) => {
//     return (
//         <div className="relative min-h-screen overflow-hidden">
//             {/* Animated gradient background */}
//             <div
//                 className="fixed inset-0 -z-10 animate-gradient"
//                 style={{
//                     background: "linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #4facfe, #667eea)",
//                     backgroundSize: "400% 400%",
//                 }}
//             />
//             {/* Dark overlay for readability */}
//             <div className="fixed inset-0 -z-10 bg-background/70" />
//             {/* Floating orbs */}
//             <div className="fixed top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float pointer-events-none" />
//             <div
//                 className="fixed bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float pointer-events-none"
//                 style={{ animationDelay: "1.5s" }}
//             />
//             <div
//                 className="fixed top-1/2 left-1/2 w-60 h-60 rounded-full bg-accent-pink/5 blur-3xl animate-float pointer-events-none"
//                 style={{ animationDelay: "0.8s" }}
//             />

//             <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 pb-28">{children}</div>
//         </div>
//     );
// };

// export default AppLayout;
