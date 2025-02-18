import React, { forwardRef, memo } from 'react';

const Settings = memo(
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
        <path d="M20.857 2.057a15.048 15.048 0 014.823 2.688c.357.296.477.786.297 1.21a4.13 4.13 0 00.241 3.731 4.29 4.29 0 003.411 2.095c.467.033.858.359.966.806a14.528 14.528 0 01.001 6.827c-.108.448-.5.774-.967.807a4.285 4.285 0 00-3.411 2.094 4.132 4.132 0 00-.241 3.732c.18.423.06.913-.296 1.209a15.044 15.044 0 01-4.822 2.689 1.081 1.081 0 01-1.249-.428c-.783-1.2-2.13-1.939-3.608-1.939s-2.825.739-3.61 1.939a1.08 1.08 0 01-1.248.427 15.014 15.014 0 01-4.822-2.687 1.04 1.04 0 01-.297-1.21 4.13 4.13 0 00-.241-3.731 4.29 4.29 0 00-3.411-2.095 1.066 1.066 0 01-.966-.806 14.528 14.528 0 01-.001-6.827c.108-.448.5-.774.967-.807a4.285 4.285 0 003.411-2.094 4.135 4.135 0 00.242-3.732 1.04 1.04 0 01.296-1.209 15.044 15.044 0 014.822-2.689c.467-.157.982.02 1.249.428a4.295 4.295 0 003.608 1.94c1.458 0 2.789-.719 3.562-1.867l.038-.06a1.08 1.08 0 011.257-.441zM16 12a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  ),
);
Settings.displayName = 'Settings';
Settings['iconName'] = 'settings';
export default Settings;
