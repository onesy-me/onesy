import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlender = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Blender'

      short_name='Blender'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M13,16h-2c-1.65,0-3,1.35-3,3v1h8v-1C16,17.35,14.65,16,13,16z M12,19c-0.55,0-1-0.45-1-1s0.45-1,1-1 s1,0.45,1,1S12.55,19,12,19z" opacity=".3"/><path d="M16.13,15.13L18,3h-4V2h-4v1H5C3.9,3,3,3.9,3,5v4c0,1.1,0.9,2,2,2h2.23l0.64,4.13C6.74,16.05,6,17.43,6,19v1 c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-1C18,17.43,17.26,16.05,16.13,15.13z M5,9V5h1.31l0.62,4H5z M15.67,5l-1.38,9H9.72L8.33,5 H15.67z M16,20H8v-1c0-1.65,1.35-3,3-3h2c1.65,0,3,1.35,3,3V20z"/><circle cx="12" cy="18" r="1"/></g></g>
    </Icon>
  );
});

IconMaterialBlender.displayName = 'OnesyIconMaterialBlender';

export default IconMaterialBlender;
