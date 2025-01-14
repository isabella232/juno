import React, { forwardRef, memo } from 'react';

const SendFilled = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M28.941 4.342l-8.666 24c-.305.843-1.48.891-1.851.074l-4.196-9.23 7.309-7.307-1.414-1.414-7.308 7.308-9.227-4.193c-.816-.371-.769-1.546.074-1.851l24-8.666a1 1 0 011.28 1.28z" />
      </svg>
    ),
  ),
);
SendFilled.displayName = 'SendFilled';
SendFilled['iconName'] = 'send_filled';
export default SendFilled;
