import React, { forwardRef, memo } from 'react';

const Share = memo(
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
        <path d="M26 30H6a2 2 0 01-2-2V12a2 2 0 012-2h3a1 1 0 010 2H7a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V13a1 1 0 00-1-1h-2a1 1 0 010-2h3a2 2 0 012 2v16a2 2 0 01-2 2zM19.884 8.292L17 5.416v11.17a1 1 0 01-2 0V5.416l-2.884 2.876a.998.998 0 01-1.411-1.411l4.588-4.588a.999.999 0 011.414 0l4.588 4.588a.998.998 0 01-1.411 1.411z" />
      </svg>
    ),
  ),
);
Share.displayName = 'Share';
Share['iconName'] = 'share';
export default Share;
