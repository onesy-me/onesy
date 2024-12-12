import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdateAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAltW100Filled'

      short_name='SystemUpdateAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h214v28H160v480h640v-480H614v-28h214v536H132Zm348-158L316-534l20-20 130 130v-324h28v324l130-130 20 20-164 164Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateAltW100Filled.displayName = 'OnesyIconMaterialSystemUpdateAltW100Filled';

export default IconMaterialSystemUpdateAltW100Filled;
