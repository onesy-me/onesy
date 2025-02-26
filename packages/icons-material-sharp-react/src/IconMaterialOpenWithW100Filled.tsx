import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenWithW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenWithW100Filled'

      short_name='OpenWith'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-116 346-250l20-20 100 100v-204h28v204l100-100 20 20-134 134ZM250-346 116-480l134-134 20 20-100 100h204v28H170l100 100-20 20Zm460 0-20-20 100-100H586v-28h204L690-594l20-20 134 134-134 134ZM466-586v-204L366-690l-20-20 134-134 134 134-20 20-100-100v204h-28Z"/>
    </Icon>
  );
});

IconMaterialOpenWithW100Filled.displayName = 'OnesyIconMaterialOpenWithW100Filled';

export default IconMaterialOpenWithW100Filled;
