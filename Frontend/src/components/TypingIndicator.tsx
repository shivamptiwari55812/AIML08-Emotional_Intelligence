import { motion } from "framer-motion";

const TypingIndicator = () => (
    <div className="flex items-center gap-2 px-4 py-3">
        <div className="glass rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    </div>
);

export default TypingIndicator;
