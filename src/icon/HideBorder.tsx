import React, { forwardRef, memo } from 'react';

const HideBorder = memo(
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
        <path d="M28.749 3.293a.999.999 0 010 1.414l-3.546 3.546C28.731 10.822 31 14.256 31 16c0 3-6.716 11-15 11-2.706 0-5.245-.854-7.437-2.108l-3.856 3.856a.999.999 0 11-1.414-1.414L27.335 3.292a.999.999 0 011.414 0zm-4.978 6.392l-2.862 2.863a6 6 0 01-8.36 8.36l-2.514 2.514C11.952 24.433 13.987 25 16 25c3.233 0 6.526-1.462 9.29-3.88 1.169-1.022 2.162-2.156 2.853-3.223.569-.878.857-1.609.857-1.897s-.289-1.019-.857-1.897c-.691-1.066-1.684-2.2-2.853-3.223a18.306 18.306 0 00-1.519-1.195zM16 5c2.201 0 4.292.565 6.176 1.451l-1.515 1.516c-1.523-.625-3.099-.966-4.661-.966-3.233 0-6.526 1.462-9.29 3.88-1.169 1.022-2.162 2.156-2.853 3.223-.568.878-.857 1.609-.857 1.897s.289 1.019.857 1.897c.691 1.066 1.684 2.2 2.853 3.223.142.125.286.247.432.366l-1.421 1.42C2.815 20.471 1 17.561 1 16.001c0-3 6.716-11 15-11zm3.462 8.995l-5.467 5.467a4 4 0 005.467-5.467zM16 10c.78 0 1.525.149 2.208.419l-1.624 1.623a4 4 0 00-4.542 4.542l-1.623 1.624A6 6 0 0116 10z" />
      </svg>
    ),
  ),
);
HideBorder.displayName = 'HideBorder';
HideBorder['iconName'] = 'hide_border';
export default HideBorder;
