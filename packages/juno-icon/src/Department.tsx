import React, { forwardRef, memo } from 'react';

const Department = memo(
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
        <path d="M11 18a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2h8zm18 0a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-8a2 2 0 012-2h8zm-18 2H3v8h8v-8zm18 0h-8v8h8v-8zM20 2a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 2h-8v8h8V4z" />
      </svg>
    ),
  ),
);
Department.displayName = 'Department';
Department['iconName'] = 'department';
export default Department;
