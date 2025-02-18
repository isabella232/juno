import React, { forwardRef, memo } from 'react';

const ThumbupBorder = memo(
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
        <path d="M4 28a2 2 0 01-2-2v-9a2 2 0 012-2h4l6.825-11.12A4 4 0 0118.217 2H19a2.305 2.305 0 012.227 2.899L19.867 10H26a4 4 0 014 4v4.5a9.5 9.5 0 01-9.5 9.5H4zm3-11H5a1 1 0 00-1 1v7a1 1 0 001 1h2v-9zM19 4h-.783a1.99 1.99 0 00-1.687.926l-6.825 11.12C9.341 16.639 9 17 9 17v9h11.5a7.5 7.5 0 007.5-7.5V14a2 2 0 00-2-2h-6.133a2 2 0 01-1.933-2.515l1.36-5.101A.305.305 0 0018.999 4z" />
      </svg>
    ),
  ),
);
ThumbupBorder.displayName = 'ThumbupBorder';
ThumbupBorder['iconName'] = 'thumbup_border';
export default ThumbupBorder;
