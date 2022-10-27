/**
 * 场景画布 组件
 * 
 */
import React, { useEffect, useState } from 'react';

const Scene = () => {
  useEffect(() => {
    const _bgcanvas =  document.getElementById("bgcanvas");
    const _bgCtx = _bgcanvas.getContext('2d');
    // const _bgDataView = new DataView(_bgCtx.getImageData())

  }, []);

  return (
    <div id="scene" className="scene-container">
      <canvas id="bgcanvas"></canvas>
    </div>
  )
}

export default Scene;