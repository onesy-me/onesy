import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerShadesClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesClosedW100'

      short_name='RollerShadesClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H518q0 15.74-11.18 26.87t-27 11.13Q464-134 453-145.13T442-172H132Zm108-157h480v-431H240v431Zm0 129h226v-101H240v101Zm254 0h226v-101H494v101ZM240-760h480-480Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesClosedW100.displayName = 'OnesyIconMaterialRollerShadesClosedW100';

export default IconMaterialRollerShadesClosedW100;
