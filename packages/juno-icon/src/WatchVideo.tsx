import React, { forwardRef, memo } from 'react';

const WatchVideo = memo(
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
        <path d="M17.818 5a5 5 0 015 5v3.92l6.328-5.751c.614-.559 1.584-.166 1.667.629l.006.111v14.545c0 .868-1.03 1.324-1.673.74l-6.328-5.753v3.922a4.999 4.999 0 01-4.783 4.995l-.217.005H6a5 5 0 01-5-5V9.999a5 5 0 015-5zm0 2H6a3 3 0 00-3 3v12.364a3 3 0 003 3h11.818a3 3 0 003-3V10a3 3 0 00-3-3zm11 4.168l-5.514 5.012 5.514 5.014V11.168z" />
      </svg>
    ),
  ),
);
WatchVideo.displayName = 'WatchVideo';
WatchVideo['iconName'] = 'watch-video';
export default WatchVideo;
