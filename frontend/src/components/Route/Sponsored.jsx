import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <h1><b>Our Partners</b></h1>
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYSmj8Zs_38DQCc203Vvnf8orT68eAF9Q3OXNdSsSg_r7ntXH5cu4omE_t8lR8UHvhqWcOJdHR9GlmSDvKkvy1fynMEp=s2560"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTTe2NhvZVtwfPSPtogK1BoE_r25MtED48KAetTHHStaGt_GpN-NGIr4AfqkwG8k1R2QugOHPDKU4LCVCRn9VYRr3HUsg=s2560"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQMq3mK_OI0vOUp1_VlH4Ssdf_tmWcSoRTFBWYFiq7GQpD5KDEfJrhia_jtoc00vIRZyMqf8YPJ42w5nFeAYuM--QvEMA=s2560"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYREpc0Ur62Zfx1hLVuc9t9ePrhxy06dWGFktss_YUv7tBIEryBrJ-XtlIxDWBnz98rtlzX7OpLeZ592MGDwQoqcCyxJCQ=s2560"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRPqa5K0vEsLGfWSBfLwv4yeIRF7YmDrvSKkcWwIPuN9PFZyL1BGJF1gs8B2nwkKKid8yvjTuJERtpX2iV5dCkpJ-D8=s2560"
            style={{width:"150px", objectFit:"contain"}}
            alt="Kotmale"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
