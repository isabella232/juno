import React, { forwardRef, memo } from 'react';

const CloudContact = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm7 7H9a1 1 0 00-1 1v9a1 1 0 001 1h2.793c.133 0 .26.053.354.146l3.571 5.571a.4.4 0 00.566 0l3.571-5.571a.5.5 0 01.354-.146h2.793a1 1 0 001-1v-9a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
CloudContact.displayName = 'CloudContact';
CloudContact['iconName'] = 'cloud_contact';
export default CloudContact;
