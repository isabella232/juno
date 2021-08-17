import React, { forwardRef, memo } from 'react';

const AddIntegration = memo(
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
        <path d="M13.241 0a5.517 5.517 0 015.517 5.517h5.517c1.219 0 2.207.988 2.207 2.207v5.517a5.517 5.517 0 110 11.034v5.517a2.207 2.207 0 01-2.207 2.207h-7.724v-2.207a3.31 3.31 0 00-3.116-3.305l-.194-.006a3.31 3.31 0 00-3.305 3.116l-.006.195v2.207H2.206a2.207 2.207 0 01-2.207-2.207v-7.724h2.207a3.31 3.31 0 003.305-3.116l.006-.195a3.31 3.31 0 00-3.116-3.305l-.195-.006H-.001V7.722c0-1.219.988-2.207 2.207-2.207h5.517A5.517 5.517 0 0113.24-.002zm0 2.207a3.31 3.31 0 00-3.305 3.116l-.006.194v2.207H2.206v5.517l.064.001.258.008c2.83.164 5.068 2.449 5.189 5.324l.005.248-.008.258a5.517 5.517 0 01-5.265 5.19l-.243.005v5.517h5.517l.001-.064.008-.258c.164-2.83 2.449-5.068 5.324-5.189l.248-.005.258.008a5.517 5.517 0 015.19 5.265l.005.243h5.517v-7.724h2.207a3.31 3.31 0 00.194-6.615l-.195-.006h-2.207V7.723h-7.724V5.516a3.31 3.31 0 00-3.31-3.31z" />
        <path d="M15.448 11.034c.609 0 1.103.494 1.103 1.103v3.31h3.31a1.103 1.103 0 010 2.206H16.55l.001 3.31a1.103 1.103 0 01-2.206 0l-.001-3.31h-3.309a1.103 1.103 0 010-2.206h3.31v-3.31c0-.609.494-1.103 1.103-1.103z" />
      </svg>
    ),
  ),
);
AddIntegration.displayName = 'AddIntegration';
AddIntegration['iconName'] = 'add-integration';
export default AddIntegration;
