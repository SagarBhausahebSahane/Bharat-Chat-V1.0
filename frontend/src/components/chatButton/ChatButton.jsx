import React, { useRef } from "react";
import { motion } from "framer-motion";

const DraggableChatButton = () => {
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // allows button to be draggable inside
      }}
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.5} // optional, smooth bounce
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "grab",
          userSelect: "none",
          pointerEvents: "auto", // make button clickable
          zIndex: 1000,
        }}
        whileTap={{ scale: 0.9 }} // small tap animation
      >
        Chat
      </motion.div>
    </div>
  );
};

export default DraggableChatButton;
