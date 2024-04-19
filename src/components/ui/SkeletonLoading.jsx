import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoading({ ...props }) {
  return (
    <div>
      <Skeleton {...props} />
    </div>
  );
}
