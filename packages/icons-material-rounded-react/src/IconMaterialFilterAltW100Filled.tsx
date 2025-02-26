import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltW100Filled'

      short_name='FilterAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-212q-12 0-20-8t-8-20v-218L241-724q-6-8-1.5-16t13.5-8h454q9 0 13.5 8t-1.5 16L508-458v218q0 12-8 20t-20 8Z"/>
    </Icon>
  );
});

IconMaterialFilterAltW100Filled.displayName = 'OnesyIconMaterialFilterAltW100Filled';

export default IconMaterialFilterAltW100Filled;
