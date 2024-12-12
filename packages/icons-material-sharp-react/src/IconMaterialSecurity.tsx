import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Security'

      short_name='Security'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/>
    </Icon>
  );
});

IconMaterialSecurity.displayName = 'OnesyIconMaterialSecurity';

export default IconMaterialSecurity;
