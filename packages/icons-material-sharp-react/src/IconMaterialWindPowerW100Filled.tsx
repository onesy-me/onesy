import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindPowerW100Filled'

      short_name='WindPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-92v-28h56v-244q4 1 7 1h7q25 0 45-14.5t28-37.5l140 35 111 201-48 44-240-237q-5 3-10.5 4.5T534-364v244h56v28H450Zm-278-80v-28h148v28H172Zm-63-227v-69h339q-2 7-3.5 13.5T443-440q0 8 1.5 15.5T449-410l-119 74-221-63Zm411 9q-21 0-35.5-14.5T470-440q0-21 14.5-35.5T520-490q21 0 35.5 14.5T570-440q0 21-14.5 35.5T520-390Zm41-115q-9-6-19.5-9t-21.5-3h-7q-3 0-7 1v-152l168-158 59 37-172 284ZM92-600v-28h148v28H92Zm120-160v-28h188v28H212Z"/>
    </Icon>
  );
});

IconMaterialWindPowerW100Filled.displayName = 'OnesyIconMaterialWindPowerW100Filled';

export default IconMaterialWindPowerW100Filled;
