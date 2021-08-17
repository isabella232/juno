import React, { forwardRef, memo } from 'react';

const MicOff = memo(
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
        <path d="M24 12a1 1 0 011 1v3c0 4.632-3.5 8.447-7.999 8.945L17 29a1 1 0 01-2 0v-4.055a8.952 8.952 0 01-3.791-1.325l1.461-1.461A7 7 0 0023 16v-3a1 1 0 011-1zm5.435-8.021a.999.999 0 010 1.414L5.393 29.435a.999.999 0 11-1.414-1.414L28.021 3.979a.999.999 0 011.414 0zM21 13.828V16a5 5 0 01-6.827 4.656L21 13.828zM8 12a1 1 0 011 1v3c0 1.206.305 2.341.842 3.332l-1.462 1.46A8.961 8.961 0 017 16v-3a1 1 0 011-1zm8-10a5 5 0 015 5v1.172l-9.655 9.656A4.978 4.978 0 0111 15.999v-9a5 5 0 015-5z" />
      </svg>
    ),
  ),
);
MicOff.displayName = 'MicOff';
MicOff['iconName'] = 'mic-off';
export default MicOff;
