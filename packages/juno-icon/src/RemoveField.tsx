import React, { forwardRef, memo } from 'react';

const RemoveField = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm3.712 7.813l-3.713 3.713-3.712-3.712a1.75 1.75 0 00-2.475 2.475l3.712 3.712-3.713 3.713a1.75 1.75 0 002.475 2.475l3.712-3.713 3.713 3.713a1.75 1.75 0 002.475-2.475l-3.713-3.713 3.713-3.712a1.75 1.75 0 00-2.475-2.475z" />
      </svg>
    ),
  ),
);
RemoveField.displayName = 'RemoveField';
RemoveField['iconName'] = 'remove_field';
export default RemoveField;
