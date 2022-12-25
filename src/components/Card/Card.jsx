import React, { useMemo } from "react";
import styles from "./Card.module.css";
import cardLogo from "./logoCard.svg";
import cxs from "cxs";
import calculateTriangleAngles from "./calculateTriangleAngles.js";

export default function Card() {
  const size = useMemo(() => ({ width: 654, height: 318 }), []);
  const { B } = useMemo(
    () => calculateTriangleAngles(size.width, size.height),
    [size.width, size.height]
  );
  const corners = useMemo(
    () => ({ a: B, b: 180 - B, c: 180 + B, d: 360 - B }),
    [B]
  );

  const Box = cxs({
    width: `${size.width}px`,
    height: `${size.height}px`,
    position: "relative",
    padding: " 9px",
    ":before": {
      content: `""`,
      position: `absolute`,
      inset: 0,
      borderRadius: `10px`,
      background: `repeating-conic-gradient(
     from 0deg at 50% 50%,
     #b9e6ff 0deg,
     rgba(185, 230, 255, 0) ${corners.a}deg,
     #b9e6ff 90deg,
     rgba(185, 230, 255, 0) ${corners.b}deg,
     #b9e6ff 180deg,
     rgba(185, 230, 255, 0) ${corners.c}deg,
     #b9e6ff 270deg,
     rgba(185, 230, 255, 0) ${corners.d}deg,
     #b9e6ff 360deg
   )`,
      padding: `3px`,
      "-webkitMask": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
      "-webkit-mask-composite": `xor`,
      maskComposite: `exclude`,
    },
  });

  return (
    <div className={Box}>
      <div className={styles.cardBorderIn}>
        <div className={styles.cardMain}>
          <div className={styles.cardContainer}>
            <img src={cardLogo} alt="React Logo" />
            <div className={styles.cardTitle}>lorem nft metaverse</div>
          </div>
          <p className={styles.cardText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            blanditiis similique provident dolore numquam nesciunt quis dicta
            tempora molestias!
          </p>
        </div>
      </div>
    </div>
  );
}
