import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  return (
      <ContentLoader
          className="guitar-block"
          speed={2}
          width={280}
          height={500}
          viewBox="0 0 280 500"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="280" height="390" />
          <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
          <rect x="0" y="431" rx="10" ry="10" width="120" height="35" />
          <rect x="137" y="427" rx="24" ry="20" width="140" height="45" />
      </ContentLoader>
  )
};
