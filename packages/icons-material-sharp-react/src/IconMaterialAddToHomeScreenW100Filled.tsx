import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToHomeScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenW100Filled'

      short_name='AddToHomeScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-92v-184h28v62h400v-532H320v62h-28v-184h456v776H292ZM176-316l-20-20 250-250H226v-28h228v228h-28v-180L176-316Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenW100Filled.displayName = 'OnesyIconMaterialAddToHomeScreenW100Filled';

export default IconMaterialAddToHomeScreenW100Filled;
