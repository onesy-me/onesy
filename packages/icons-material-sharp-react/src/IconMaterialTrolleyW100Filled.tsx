import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrolleyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrolleyW100Filled'

      short_name='Trolley'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-280v-480H106v-28h134v480h600v28H212Zm51 142q-22 0-37-15t-15-37q0-22 15-37t37-15q22 0 37 15t15 37q0 22-15 37t-37 15Zm57-250v-160h160v160H320Zm280 0v-160h160v160H600Zm186.9 250q-21.9 0-36.4-15T736-190q0-22 14.5-37t36.4-15q21.91 0 37.5 15 15.6 15 15.6 37t-15.6 37q-15.59 15-37.5 15Z"/>
    </Icon>
  );
});

IconMaterialTrolleyW100Filled.displayName = 'OnesyIconMaterialTrolleyW100Filled';

export default IconMaterialTrolleyW100Filled;
