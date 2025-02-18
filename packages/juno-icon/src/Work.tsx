import React, { forwardRef, memo } from 'react';

const Work = memo(
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
        <path d="M22 3a2 2 0 012 2v3h4a2 2 0 012 2v17a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 012-2h4V5a2 2 0 012-2h12zm5 7H5a1 1 0 00-1 1v15a1 1 0 001 1h22a1 1 0 001-1V11a1 1 0 00-1-1zm-6-5H11a1 1 0 00-1 1v2h12V6a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
Work.displayName = 'Work';
Work['iconName'] = 'work';
export default Work;
