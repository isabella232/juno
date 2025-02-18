import React, { forwardRef, memo } from 'react';

const MemberBorder = memo(
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
        <path d="M16 18c7.067 0 13 4.315 13 10a2 2 0 01-2 2H5a2 2 0 01-2-2c0-5.685 5.933-10 13-10zm0 2c-5.736 0-10.447 3.193-10.955 7.269-.063.503.17.731.567.731H26.53c.239 0 .48-.158.444-.551C26.585 23.288 21.82 20 16 20zm0-18a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 10.001 10.001A5 5 0 0016 4z" />
      </svg>
    ),
  ),
);
MemberBorder.displayName = 'MemberBorder';
MemberBorder['iconName'] = 'member_border';
export default MemberBorder;
