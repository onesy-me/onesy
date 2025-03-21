import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdfScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScanner'

      short_name='AdfScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="6" opacity=".3" width="8" x="8" y="6"/><path d="M19,14H5c-0.55,0-1,0.45-1,1v3h16v-3C20,14.45,19.55,14,19,14z M18,17c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C19,16.55,18.55,17,18,17z" opacity=".3"/><path d="M19,12h-1V4H6v8H5c-1.66,0-3,1.34-3,3v5h20v-5C22,13.34,20.66,12,19,12z M8,6h8v6H8V6z M20,18H4v-3c0-0.55,0.45-1,1-1h14 c0.55,0,1,0.45,1,1V18z"/><circle cx="18" cy="16" r="1"/></g></g>
    </Icon>
  );
});

IconMaterialAdfScanner.displayName = 'OnesyIconMaterialAdfScanner';

export default IconMaterialAdfScanner;
