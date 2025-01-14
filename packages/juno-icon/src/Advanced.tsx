import React, { forwardRef, memo } from 'react';

const Advanced = memo(
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
        <path d="M20.399 4h-9.405a4 4 0 00-3.453 1.981l-4.678 8a4.001 4.001 0 000 4.038l4.678 8A4 4 0 0010.994 28h9.405a4 4 0 003.457-1.988l4.656-8a4 4 0 000-4.024l-4.656-8A4 4 0 0020.399 4zm-4.716 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.667 6-6 6z" />
      </svg>
    ),
  ),
);
Advanced.displayName = 'Advanced';
Advanced['iconName'] = 'advanced';
export default Advanced;
