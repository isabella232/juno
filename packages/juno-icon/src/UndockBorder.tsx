import React, { forwardRef, memo } from 'react';

const UndockBorder = memo(
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
        <path d="M20 10a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V12a2 2 0 012-2h16zm0 2H4v16h16V12zm-3 3v6l-2.343-2.344-6.536 6.536a.999.999 0 11-1.414-1.414l6.536-6.536L11 15h6zM28 2a2 2 0 012 2v16a2 2 0 01-2 2h-4v-2h4V4H12v4h-2V4a2 2 0 012-2h16z" />
      </svg>
    ),
  ),
);
UndockBorder.displayName = 'UndockBorder';
UndockBorder['iconName'] = 'undock_border';
export default UndockBorder;
