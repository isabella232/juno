import React, { forwardRef, memo } from 'react';

const ExcelD = memo(
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
        <path
          fill="var(--color38, #1e2f27)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color39, #008f4d)"
          d="M11.915 8l4.844.023 5.463 5.114v8.889c0 .605-.215.933-.627 1.349s-.918.624-1.518.624h-8.171c-.6 0-1.106-.208-1.518-.624s-.61-.743-.61-1.349v-11.87c0-.606.206-1.116.619-1.533s.918-.624 1.518-.624z"
        />
        <path
          fill="var(--color26, #f1f1f1)"
          d="M14.258 14.051h-1.387l2.287 3.141-2.474 3.52h1.312l1.837-2.763 1.836 2.763h1.425l-2.587-3.595 2.287-3.066h-1.312l-1.649 2.347-1.575-2.347z"
        />
      </svg>
    ),
  ),
);
ExcelD.displayName = 'ExcelD';
ExcelD['iconName'] = 'excel-D';
export default ExcelD;
