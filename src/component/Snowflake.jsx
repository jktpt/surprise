import React, { useEffect, useState } from "react";
import "./snow.css"; // สร้าง CSS แยกต่างหากสำหรับการตกแต่ง

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [ground, setGround] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const snowflake = {
        id: Math.random().toString(36).substr(2, 9),
        x: Math.random() * window.innerWidth,
        y: 0,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 3 + 1,
      };
      setSnowflakes((prev) => [...prev, snowflake]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes((prev) => {
        const updatedFlakes = [];
        const newGround = [...ground];

        prev.forEach((flake) => {
          const nextY = flake.y + flake.speed;

          if (nextY + flake.size >= window.innerHeight) {
            // กองที่พื้น
            newGround.push({
              x: flake.x,
              size: flake.size,
            });
          } else {
            updatedFlakes.push({ ...flake, y: nextY });
          }
        });

        setGround(newGround);
        return updatedFlakes;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [ground]);

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.x,
            top: flake.y,
            width: flake.size,
            height: flake.size,
          }}
        ></div>
      ))}
      {ground.map((flake, index) => (
        <div
          key={index}
          className="ground-flake"
          style={{
            left: flake.x,
            bottom: 0,
            width: flake.size,
            height: flake.size,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Snowfall;