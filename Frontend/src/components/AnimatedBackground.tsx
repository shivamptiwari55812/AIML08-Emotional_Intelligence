const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden gradient-bg">
            {/* Animated gradient orbs */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full animate-float-slow opacity-20"
                style={{
                    background: "radial-gradient(circle, hsl(190 80% 50% / 0.3), transparent 70%)",
                    top: "-10%",
                    right: "-10%",
                }}
            />
            <div
                className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-15"
                style={{
                    background: "radial-gradient(circle, hsl(250 60% 60% / 0.3), transparent 70%)",
                    bottom: "-5%",
                    left: "-5%",
                    animationDelay: "2s",
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full animate-float-slow opacity-10"
                style={{
                    background: "radial-gradient(circle, hsl(170 60% 45% / 0.3), transparent 70%)",
                    top: "40%",
                    left: "30%",
                    animationDelay: "4s",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
