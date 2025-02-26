import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialButtonsAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ButtonsAltW100Filled'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-292v-376h696v376H132Zm174-94h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialButtonsAltW100Filled.displayName = 'OnesyIconMaterialButtonsAltW100Filled';

export default IconMaterialButtonsAltW100Filled;
