import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedroomParent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParent'

      short_name='BedroomParent'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M4,20h16V4H4V20z M5,13.17c0-0.66,0.25-1.26,0.65-1.72V9c0-1.1,0.9-2,2-2H11c0.37,0,0.72,0.12,1,0.32 C12.28,7.12,12.63,7,13,7h3.35c1.1,0,2,0.9,2,2v2.45c0.4,0.46,0.65,1.06,0.65,1.72V17h-1.5v-1.5h-11V17H5V13.17z" opacity=".3"/><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z"/><path d="M6.5,15.5h11V17H19v-3.83c0-0.66-0.25-1.26-0.65-1.72V9c0-1.1-0.9-2-2-2H13c-0.37,0-0.72,0.12-1,0.32 C11.72,7.12,11.37,7,11,7H7.65c-1.1,0-2,0.9-2,2v2.45C5.25,11.91,5,12.51,5,13.17V17h1.5V15.5z M12.75,8.5h4v2h-4V8.5z M7.25,8.5 h4v2h-4V8.5z M6.5,13c0-0.55,0.45-1,1-1h9c0.55,0,1,0.45,1,1v1h-11V13z"/></g></g>
    </Icon>
  );
});

IconMaterialBedroomParent.displayName = 'OnesyIconMaterialBedroomParent';

export default IconMaterialBedroomParent;
