import { motion } from "framer-motion";

type Emotion = "happy" | "focused" | "calm" | "stressed";

const emotionConfig: Record<Emotion, { label: string; emoji: string; color: string }> = {
    happy: { label: "Happy", emoji: "😊", color: "bg-emotion-happy/20 text-emotion-happy border-emotion-happy/30" },
    focused: { label: "Focused", emoji: "🎯", color: "bg-emotion-focused/20 text-emotion-focused border-emotion-focused/30" },
    calm: { label: "Calm", emoji: "😌", color: "bg-emotion-calm/20 text-emotion-calm border-emotion-calm/30" },
    stressed: { label: "Stressed", emoji: "😰", color: "bg-emotion-stressed/20 text-emotion-stressed border-emotion-stressed/30" },
};

const EmotionIndicator = ({ emotion, size = "md" }: { emotion: Emotion; size?: "sm" | "md" }) => {
    const config = emotionConfig[emotion];
    const sizeClasses = size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm";

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${config.color} ${sizeClasses}`}
        >
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                {config.emoji}
            </motion.span>
            {config.label}
        </motion.div>
    );
};

export default EmotionIndicator;
export type { Emotion };
