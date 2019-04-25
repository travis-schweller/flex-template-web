import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    // <svg
    //   className={className}
    //   {...rest}
    //   width="21"
    //   height="25"
    //   // width="500"
    //   // height="500"
    //   viewBox="0 0 21 25"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    // <path
    //   d="M10.063 23.646c-2.286 0-4.025-1.852-4.025-4.138 0-3.342 2.405-6.49 5.69-7.246-1.875 1.382-1.77 4.06-1.032 5.176.506-.416.956-.87 1.033-1.55 1.727.68 2.358 2.147 2.358 3.733 0 2.288-1.74 4.026-4.025 4.026m9.64-12.442c-.108-.352-.536-.467-.807-.24-.7.592-1.47 1.063-2.3 1.406-.21-6.144-4.754-11.247-10.8-12.214-.42-.066-.73.385-.514.753 1.53 2.598 1.656 5.74.443 8.395-.59-.816-1.033-1.717-1.32-2.686-.1-.342-.522-.482-.805-.244C1.313 8.29 0 11.1 0 14.086c0 5.62 4.553 10.063 10.063 10.063 5.548 0 10.062-4.514 10.062-10.063 0-.982-.143-1.952-.423-2.883"
    //   fillRule="evenodd"
    // />
    // </svg>

    // <svg
    //   className={className}
    //   width="30"
    //   height="30"
    //   viewBox="0 0 21 25">
    //   <circle cx="10" cy="10" r="10"/>
    //   <text x="47%" y="47%" text-anchor="middle" fill="white" font-size="15px" font-family="SignPainter" dy=".2em">P</text>
    // </svg>
    <svg width="39px" height="37px" viewBox="0 0 39 37" version="1.1" xmlns="http://www.w3.org/2000/svg" >

      <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Artboard" transform="translate(-109.000000, -52.000000)">
              <g id="Group" transform="translate(111.000000, 52.000000)">
                  <ellipse id="Oval" stroke="#88A489" stroke-width="3" fill-rule="nonzero" cx="17.5" cy="18.0" rx="17.5" ry="16.5410959"></ellipse>
                  <text id="P" font-family="SignPainter-HouseScriptSemibold, SignPainter" font-size="32" font-style="condensed" font-weight="500" fill="#88A489">
                      <tspan x="9.43188406" y="27">P</tspan>
                  </text>
              </g>
          </g>
      </g>
    </svg>

  );
};




const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
