import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlternateEmailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlternateEmailW100Filled'

      short_name='AlternateEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.56-27.39t-110.57-74.35q-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480v34q0 48-32.98 81T714-332q-36 0-65-21t-41-55q-21 34-54.5 55T480-332q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105v34q0 35 25.5 60.5T714-360q35 0 60.5-25.5T800-446v-34q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v28H480Zm0-228q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialAlternateEmailW100Filled.displayName = 'OnesyIconMaterialAlternateEmailW100Filled';

export default IconMaterialAlternateEmailW100Filled;
