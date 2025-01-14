import React, { forwardRef, memo } from 'react';

const AddReactions = memo(
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
        <path d="M19.921 18.612c.44.23.589.737.334 1.133-1.145 1.776-3.253 2.893-5.576 2.893-2.306 0-4.4-1.1-5.551-2.855-.258-.394-.113-.902.325-1.135s1.002-.102 1.261.292c.823 1.255 2.318 2.04 3.966 2.04 1.66 0 3.165-.798 3.984-2.068.255-.396.818-.531 1.258-.301z" />
        <path d="M13.867 3.049c7.152-.626 13.458 4.665 14.084 11.818.012.142.022.283.03.424a7.435 7.435 0 00-2.021-.233l-.002-.016c-.529-6.052-5.865-10.529-11.917-9.999S3.512 10.908 4.042 16.96c.529 6.052 5.865 10.529 11.917 9.999a10.981 10.981 0 003.518-.907 7.424 7.424 0 001.185 1.656 12.966 12.966 0 01-4.528 1.244c-7.152.626-13.458-4.665-14.084-11.818S6.715 3.676 13.868 3.05z" />
        <path d="M26.379 18.517a1 1 0 011 1l-.001 2.62 2.621.001a1 1 0 011 1v.069a1 1 0 01-1 1l-2.621-.001.001 2.621a1 1 0 01-1 1h-.069a1 1 0 01-1-1l-.001-2.621-2.62.001a1 1 0 01-1-1v-.069a1 1 0 011-1l2.62-.001.001-2.62a1 1 0 011-1h.069zM12.5 12.25a1.75 1.75 0 11-3.501-.001 1.75 1.75 0 013.501.001zM20.5 12.25a1.75 1.75 0 11-3.501-.001 1.75 1.75 0 013.501.001z" />
      </svg>
    ),
  ),
);
AddReactions.displayName = 'AddReactions';
AddReactions['iconName'] = 'add-reactions';
export default AddReactions;
