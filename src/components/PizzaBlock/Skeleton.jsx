import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={600}
    viewBox="0 0 280 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
     <circle cx="142" cy="128" r="121" /> 
    <rect x="0" y="270" rx="10" ry="10" width="280" height="14" /> 
    <rect x="0" y="308" rx="10" ry="10" width="280" height="88" /> 
    <rect x="165" y="409" rx="0" ry="0" width="0" height="1" /> 
    <rect x="125" y="412" rx="20" ry="20" width="152" height="45" /> 
    <rect x="0" y="420" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
)

export default Skeleton