import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true, // 是否启用全屏画布
          zIndex: 1, // 画布层级
        },
        particles: {
          number: {
            value: 100, // 粒子数量
            density: {
              enable: true, // 是否根据画布大小自动调整粒子密度
              value_area: 800, // 粒子密度区域大小，数值越大粒子越稀疏
            },
          },
          color: {
            value: "#66CCFF", // 粒子颜色
          },
          shape: {
            type: "circle", // 粒子形状
          },
          opacity: {
            value: 0.1, // 粒子透明度初始值
            anim: {
              enable: true, // 是否启用透明度动画
              speed: 1, // 透明度动画速度，数值越大变化越快
              opacity_min: 0.3, // 透明度动画的最小透明度
            },
          },
          size: {
            value: 3, // 粒子大小
            random: true, // 是否随机大小
          },
          line_linked: {
            enable: true, // 是否启用粒子连线
            distance: 150, // 连线最大距离，超过则不连线
            color: "#66ccff", // 连线颜色
            opacity: 0.1, // 连线透明度
            width: 1, // 连线宽度
          },
          move: {
            enable: true, // 是否启用粒子移动
            speed: 0.5, // 粒子移动速度
            direction: "none", // 移动方向，none表示随机方向
            random: false, // 是否随机移动速度
            straight: false, // 是否直线移动
            out_mode: "out", // 粒子移出画布后的行为，out表示移出后不再显示
            bounce: false, // 是否碰到边界反弹
          },
        },

        retina_detect: true, // 是否开启高清屏幕支持
      }}
    />
  );
}

export default Particle;
