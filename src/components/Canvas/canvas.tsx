import React, { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestIdRef = useRef<number | null>(null);
  const totalStars = 100; // 星星的总数
  const speed = 1; // 星星的移动速度
  const drawInterval = 100; // 绘制间隔，控制星星的移动速度
  const blinkChance = 0.02; // 星星闪烁的概率

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawStar = (
      x: number,
      y: number,
      radius: number,
      color: string,
      isBlinking: boolean
    ) => {
      if (isBlinking) {
        if (Math.random() < blinkChance) {
          return;
        }
      }

      context.save();
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.fillStyle = `rgba(255, 255, 255, 0.7)`; // 设置星星透明度为0.7
      context.shadowColor = color;
      context.shadowBlur = radius * 2;
      context.fill();
      context.closePath();
      context.restore();
    };

    const animateStars = () => {
      context.fillStyle = "#000000";
      context.fillRect(0, 0, canvas.width, canvas.height);

      const stars: {
        x: number;
        y: number;
        radius: number;
        color: string;
        dx: number; // 水平方向的速度
        dy: number; // 垂直方向的速度
        isBlinking: boolean; // 是否闪烁
      }[] = [];

      for (let i = 0; i < totalStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1 + 0.5; // 调整星星的大小范围
        const color = "#ffffff";
        const angle = Math.random() * 2 * Math.PI; // 随机角度
        const dx = Math.cos(angle) * speed; // 根据角度计算水平方向的速度
        const dy = Math.sin(angle) * speed; // 根据角度计算垂直方向的速度
        const isBlinking = Math.random() < blinkChance; // 根据闪烁概率确定是否闪烁

        stars.push({ x, y, radius, color, dx, dy, isBlinking });
      }

      const drawStars = () => {
        context.fillStyle = "#000000";
        context.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          star.x += star.dx;
          star.y += star.dy;

          // 超出画布边界，则重新设置位置
          if (
            star.x < 0 ||
            star.x > canvas.width ||
            star.y < 0 ||
            star.y > canvas.height
          ) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
          }

          drawStar(star.x, star.y, star.radius, star.color, star.isBlinking);
        }

        requestIdRef.current = requestAnimationFrame(drawStars);
      };

      drawStars();
    };

    resizeCanvas();
    animateStars();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="starfield"></canvas>;
};

export default Canvas;
