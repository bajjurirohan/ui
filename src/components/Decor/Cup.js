import React from "react";
//import './Cup.css';

const Cup=(props) =>{
    return <div className={`${props.className}`}>
<svg
    version="1.1"
    id="Layer_1"
    width="151.252px"
    height="177.557px"
    viewBox="0 0 151.252 177.557"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
  >  <g>
	  <g>
      <rect x="32.881" y="31" width="6.576" height="0">
        <animate attributeName="y" from="31" to="10" dur="2s" repeatCount="indefinite" />
        <animate attributeName="height" from="26" to="10" dur="2s" repeatCount="indefinite" /> 
        <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="59.186" width="6.576" height="0">
        <animate attributeName="y" from="25" to="-10" dur="2s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="height" from="26" to="10" dur="2s" repeatCount="indefinite"  begin="1s" /> 
        <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite"  begin="1s" />
      </rect>
		  <rect x="85.49" y="31" width="6.576" height="0">
        <animate attributeName="y" from="25" to="0" dur="2s" repeatCount="indefinite" begin="2.5s" />
        <animate attributeName="height" from="26" to="10" dur="2s" repeatCount="indefinite"  begin="2.5s" /> 
        <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite"  begin="2.5s" />
      </rect>
		  <path d="M124.78,111.796h26.472v-52.61h-26.305h-6.576H0v49.32c0,34.506,27.975,62.476,62.474,62.476
              C95.862,170.981,123.059,144.767,124.78,111.796z M124.947,65.761h19.729v39.458h-19.729V65.761z M62.474,164.404
                  c-30.819,0-55.897-25.071-55.897-55.898V65.761h111.795v42.745C118.371,139.333,93.293,164.404,62.474,164.404z"/>
		  <polygon points="0,177.557 127.901,177.557 127.901,170.981 62.474,170.981 0,170.981   "/>
		  
	  </g>
  </g>
</svg>
</div>
};

export default Cup;