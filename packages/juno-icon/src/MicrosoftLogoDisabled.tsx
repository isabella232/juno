import React, { forwardRef, memo } from 'react';

const MicrosoftLogoDisabled = memo(
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
        <path d="M15.403 15.403H4V4h11.403zM27.997 15.403H16.592V4h11.403v11.403zM15.403 28H4V16.597h11.403zM27.997 28H16.592V16.597h11.403V28z" />
      </svg>
    ),
  ),
);
MicrosoftLogoDisabled.displayName = 'MicrosoftLogoDisabled';
MicrosoftLogoDisabled['iconName'] = 'microsoft-logo-disabled';
export default MicrosoftLogoDisabled;
