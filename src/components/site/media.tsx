import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Still({ src, alt }: { src: string; alt: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.img
      src={src}
      alt={alt}
      className="aspect-video w-full rounded-2xl border border-line object-cover"
      initial={reduce ? false : { opacity: 0, scale: 1.045 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease }}
    />
  );
}
