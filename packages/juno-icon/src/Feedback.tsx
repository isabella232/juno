import React, { forwardRef, memo } from 'react';

const Feedback = memo(
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
        <path d="M26.667 2.667a2.667 2.667 0 012.667 2.667v16a2.667 2.667 0 01-2.667 2.667h-12L9.113 29a.666.666 0 01-1.112-.496v-4.503H5.334a2.667 2.667 0 01-2.667-2.667v-16a2.667 2.667 0 012.667-2.667h21.333zM15.994 17.333a1.334 1.334 0 10-.002 2.666 1.334 1.334 0 10.002-2.666zM16 6.667l-.142.005a1.853 1.853 0 00-1.705 1.989l.411 5.343a1.44 1.44 0 002.872 0l.415-5.414.001-.071A1.852 1.852 0 0016 6.667z" />
      </svg>
    ),
  ),
);
Feedback.displayName = 'Feedback';
Feedback['iconName'] = 'feedback';
export default Feedback;
