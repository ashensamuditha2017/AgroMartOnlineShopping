import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://lh3.googleusercontent.com/drive-viewer/AEYmBYTC9JTGaJNhK18zFJZRcYH_hRUOgdBMENSr27KVfgS7gxAepGd_KdV-vNhIFw5ahbLtg5NdYLUKSdykuLl-Xpnkd4zQ0w=s1600)",
      }}
    >
      <div className={`${styles.section}  w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize textAlign:'left'`}
        >
          FARM TO DOORSTEP <br /> IN 24 HOURS
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Direct from local farms to your doorstep, Our platform a swift 24 hour
          journey for the freshest produce<br /> Elevateyour meals with farm-fresh goodness and support local
          agriculture effortlessly{" "}
          <br /> From field to feast, it's a farm-tastic sprint
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
