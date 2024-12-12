import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkullW100Filled'

      short_name='Skull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-360h100l-50-100-50 100Zm-89.82-100q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5Zm280 0q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5ZM292-132v-152q-36-15-65.5-39T176-378q-21-31-32.5-67T132-520q0-136 97.42-222 97.41-86 250.5-86Q633-828 730.5-742T828-520q0 39-11.5 75T784-378q-21 31-50.5 55T668-283.82V-132h-90v-76h-56v76h-84v-76h-56v76h-90Z"/>
    </Icon>
  );
});

IconMaterialSkullW100Filled.displayName = 'OnesyIconMaterialSkullW100Filled';

export default IconMaterialSkullW100Filled;
