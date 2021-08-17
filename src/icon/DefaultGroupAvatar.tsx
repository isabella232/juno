import React, { forwardRef, memo } from 'react';

const DefaultGroupAvatar = memo(
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
        <path d="M5.483 27.417c1.234-.457 2.559-.914 3.61-1.188.137 0 .137 0 .137-.731 0-.868-.137-1.279-.274-1.691-.137-.548-.411-1.416-.548-2.285-.274-.274-.731-1.005-1.005-2.285-.274-1.142-.137-1.554 0-2.011v-.137c0-.274-.137-1.554-.274-2.696-.137-.731 0-2.285 1.005-3.564.548-.868 1.828-1.828 3.975-2.011h1.279c2.102.183 3.381 1.188 3.975 2.056 1.005 1.279 1.142 2.833 1.005 3.564-.137 1.005-.137 2.422-.137 2.696v.137c.137.411.274.868 0 2.011-.274 1.279-.731 2.011-1.005 2.285 0 .868-.274 1.691-.548 2.285-.137.548-.411 1.142-.411 1.691 0 .731 0 .731.137.731 2.011.548 5.118 1.691 6.397 2.285.503.228.868.503 1.142.823a15.519 15.519 0 01-7.905 2.148 15.9 15.9 0 01-10.556-4.113zm18.918 1.599c-.228-.32-.457-.548-.685-.685-1.371-.594-4.524-1.965-6.626-2.559-.137 0-.32 0-.137-.777.046-.32.183-.548.32-.868.228-.64.548-1.325.548-2.239.32-.32.777-1.051 1.051-2.422.32-1.188.137-1.645 0-2.102v-.137c0-.32 0-1.828.137-2.879.137-.777 0-2.422-1.051-3.793-.503-.731-1.554-1.645-3.107-2.056.685-.64 1.828-1.188 3.381-1.325h1.279c2.148.137 3.427 1.142 3.975 2.011 1.005 1.279 1.142 2.833 1.005 3.564-.137 1.005-.137 2.422-.137 2.696v.137c.137.411.274.868 0 2.011-.274 1.279-.731 2.011-1.005 2.285 0 .868-.274 1.691-.548 2.285-.137.548-.411 1.142-.411 1.691 0 .731 0 .731.137.731 1.508.411 3.61 1.188 5.164 1.782-1.051 1.005-2.102 1.873-3.29 2.65z" />
      </svg>
    ),
  ),
);
DefaultGroupAvatar.displayName = 'DefaultGroupAvatar';
DefaultGroupAvatar['iconName'] = 'default-group-avatar';
export default DefaultGroupAvatar;
