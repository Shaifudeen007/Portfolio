import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const paragraph = rootRef.current.querySelector("p");

    const split = SplitText.create(paragraph, {
      type: "words",
      wordsClass: "inline-block will-change-transform",
    });

    split.words.forEach((word) => {
      gsap.set(word, {
        attr: { "data-content": word.innerHTML },
      });
    });

    const handleMove = (e) => {
      split.words.forEach((word) => {
        const { left, top, width, height } = word.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(word, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: word.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener("pointermove", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootRef}
      className={`w-full font-sans text-[clamp(15px,2.5vw,18px)] leading-relaxed text-justify ${className}`}
      style={{
        wordBreak: "break-word",
        overflowWrap: "break-word",
        whiteSpace: "pre-line",
        ...style,
      }}
    >
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;