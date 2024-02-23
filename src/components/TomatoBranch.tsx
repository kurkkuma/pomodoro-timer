import React from "react";

function TomatoBranch() {
  return (
    <div className="tomato-branch-container">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        src="images/tomato-branch/tomato-branch_w_1400.png"
        alt="tomato branch in pot art"
        srcSet="
        images/tomato-branch/tomato-branch_w_200.png 200w,
        images/tomato-branch/tomato-branch_w_721.png 721w,
        images/tomato-branch/tomato-branch_w_1071.png 1071w,
        images/tomato-branch/tomato-branch_w_1400.png 1400w"
      />
    </div>
  );
}

export default TomatoBranch;
