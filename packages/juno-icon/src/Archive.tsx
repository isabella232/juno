import React, { forwardRef, memo } from 'react';

const Archive = memo(
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
        <path d="M28 3a2 2 0 012 2v4a2 2 0 01-2 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V11a2 2 0 01-2-2V5a2 2 0 012-2h24zm-2 8H6v15a1 1 0 001 1h18a1 1 0 001-1V11zm-7 4a1 1 0 010 2h-6a1 1 0 010-2h6zm8-10H5a1 1 0 00-1 1v2a1 1 0 001 1h22a1 1 0 001-1V6a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
Archive.displayName = 'Archive';
Archive['iconName'] = 'archive';
export default Archive;
