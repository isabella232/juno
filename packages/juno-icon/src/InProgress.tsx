import React, { forwardRef, memo } from 'react';

const InProgress = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm-.117 7.073a.744.744 0 000 1.053l5.575 5.574H8.744a.745.745 0 100 1.49h12.712l-5.574 5.574a.744.744 0 101.053 1.053l6.846-6.846a.744.744 0 000-1.053l-6.846-6.846a.744.744 0 00-1.053 0z" />
      </svg>
    ),
  ),
);
InProgress.displayName = 'InProgress';
InProgress['iconName'] = 'in-progress';
export default InProgress;
