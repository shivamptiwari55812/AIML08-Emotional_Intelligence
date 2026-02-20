import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import FloatingParticles from "../components/FloatingParticles";
import Navbar from "../components/Navbar";
import EmotionIndicator from "../components/EmotionIndicator";
import TypingIndicator from "../components/TypingIndicator";
import type { Emotion } from "../components/EmotionIndicator";
import axios from "axios";

interface Message {
    id: number;
    text: string;
    sender: "user" | "ai";
    emotion?: Emotion;
}

const aiResponses: { text: string; emotion: Emotion }[] = [
    { text: "Great question! Let me break that down for you. The key concept here is understanding the fundamentals first.", emotion: "focused" },
    { text: "I can see you're making great progress! Keep this momentum going 💪", emotion: "happy" },
    { text: "That's a tricky topic. Take a deep breath and let's approach it step by step.", emotion: "calm" },
    { text: "You've been studying hard! How about a short break before we continue?", emotion: "calm" },
    { text: "Excellent! Your understanding of this topic is really improving. Let's try a harder problem!", emotion: "happy" },
];

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm MindMitra 🧠 How can I help you study today?", sender: "ai", emotion: "happy" },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const idRef = useRef(2);

    const scrollToBottom = useCallback(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, []);

    useEffect(scrollToBottom, [messages, typing, scrollToBottom]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg: Message = { id: idRef.current++, text: input.trim(), sender: "user" };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setTyping(true);
        const res = await axios.post("http://127.0.0.1:5000/chat", { message: userMsg.text });
        console.log(JSON.parse(res.data.data));
        const data = JSON.parse(res.data.data)
        setMessages((prev) => [...prev, { id: idRef.current++, text: data.response, sender: "ai", emotion: data.emotion }]);
        setTyping(false);

        // setTimeout(
        //     () => {
        //         const resp = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        //         setMessages((prev) => [...prev, { id: idRef.current++, text: resp.text, sender: "ai", emotion: resp.emotion }]);
        //         setTyping(false);
        //     },
        //     1500 + Math.random() * 1000
        // );
    };

    return (
        <div className="min-h-screen relative flex flex-col">
            <AnimatedBackground />
            <FloatingParticles />
            <Navbar />

            <div className="relative z-10 flex-1 flex flex-col pt-20 pb-4 px-4 sm:px-6 max-w-3xl mx-auto w-full">
                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 py-4 scrollbar-thin">
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                        msg.sender === "user" ? "bg-primary text-foreground rounded-br-md" : "glass rounded-bl-md text-foreground"
                                    }`}
                                >
                                    {msg.sender === "ai" && msg.emotion && (
                                        <div className="mb-2">
                                            <EmotionIndicator emotion={msg.emotion} size="sm" />
                                        </div>
                                    )}
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {typing && <TypingIndicator />}
                </div>

                {/* Input */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-strong rounded-2xl p-2 flex items-center gap-2"
                >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Ask anything about your studies..."
                        className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className="w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:glow-primary"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Chat;
