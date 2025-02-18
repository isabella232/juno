import React, { forwardRef, memo } from 'react';

const NewFax = memo(
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
        <path d="M22.999 18a1 1 0 011 1v4h4a1 1 0 010 2h-4.001l.001 4a1 1 0 01-2 0l-.001-4h-3.999a1 1 0 010-2h4v-4a1 1 0 011-1zM29 3a1 1 0 010 2h-2v12a1 1 0 01-2 0V5H7v21a1 1 0 001 1h8a1 1 0 010 2H7a2 2 0 01-2-2V5H3a1 1 0 010-2h26zm-8 11a1 1 0 010 2H11a1 1 0 010-2h10zm0-6a1 1 0 010 2H11a1 1 0 010-2h10z" />
      </svg>
    ),
  ),
);
NewFax.displayName = 'NewFax';
NewFax['iconName'] = 'new-fax';
export default NewFax;
