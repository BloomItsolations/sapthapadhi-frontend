import React from "react";
import "./Preloader.css"; // Import CSS for styling

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="plod">
        <span className="lod1">
          <img src="/loder/1.png" alt="Loader 1" loading="lazy" />
        </span>
        <span className="lod3">
          <img src="/loder/3.png" alt="Loader 3" loading="lazy" />
        </span>
        <span className="lod2">
          <img src="/loder/2.png" alt="Loader 2" loading="lazy" />
        </span>
        
        
      </div>
    </div>
  );
};

export default Preloader;
