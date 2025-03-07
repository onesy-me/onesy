import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBathroom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bathroom'

      short_name='Bathroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M4,20h16V4H4V20z M9,18c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S9.55,18,9,18z M9,15c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S9.55,15,9,15z M12,18c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S12.55,18,12,18z M12,15 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S12.55,15,12,15z M15,18c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,18,15,18z M15,15c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,15,15,15z M7,11c0-2.76,2.24-5,5-5s5,2.24,5,5v1H7V11z" opacity=".3"/><circle cx="15" cy="14" r="1"/><circle cx="12" cy="14" r="1"/><circle cx="15" cy="17" r="1"/><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z"/><path d="M17,11c0-2.76-2.24-5-5-5s-5,2.24-5,5v1h10V11z M8.54,10.5c0.24-1.69,1.7-3,3.46-3s3.22,1.31,3.47,3H8.54z"/><circle cx="9" cy="17" r="1"/><circle cx="9" cy="14" r="1"/><circle cx="12" cy="17" r="1"/></g></g>
    </Icon>
  );
});

IconMaterialBathroom.displayName = 'OnesyIconMaterialBathroom';

export default IconMaterialBathroom;
