import React, { forwardRef, memo } from 'react';

const InboundCallOnBehalf = memo(
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
        <path d="M12 17c1.439 0 2.822.226 4.092.64a3.383 3.383 0 00-.114.775l-.001.175-.105.058c-.338.195-.64.447-.893.744A11.371 11.371 0 0012 19c-4.878 0-8.85 3.019-8.996 6.786L3 26l13.564.001a3.444 3.444 0 001.308 1.35l.106.058.001.175c.004.14.017.278.038.416H3.001a2 2 0 01-2-2c0-5.096 5.019-9 11-9zm18.701-1.701a1.02 1.02 0 010 1.443l-7.217 7.216 5.701.001a1.02 1.02 0 110 2.042H21.02a1.02 1.02 0 01-1.021-1.021v-8.165a1.02 1.02 0 112.042 0l-.001 5.7 7.217-7.216a1.02 1.02 0 011.443 0zM12 3a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  ),
);
InboundCallOnBehalf.displayName = 'InboundCallOnBehalf';
InboundCallOnBehalf['iconName'] = 'inbound_call_on_behalf';
export default InboundCallOnBehalf;
