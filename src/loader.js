import React from "react";
import ContentLoader from "react-content-loader";

const AvatarLoader = (props) => (
  <ContentLoader
    speed={4}
    width={48}
    height={48}
    viewBox="0 0 60 48"
    backgroundColor="#167"
    foregroundColor="#246"
    {...props}
  >
    <circle cx="24" cy="24" r="24" />
  </ContentLoader>
);

export { AvatarLoader };
