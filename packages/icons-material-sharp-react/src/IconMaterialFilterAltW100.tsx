import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltW100'

      short_name='FilterAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-212v-246L222-748h516L508-458v246h-56Zm28-256 198-252H282l198 252Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFilterAltW100.displayName = 'OnesyIconMaterialFilterAltW100';

export default IconMaterialFilterAltW100;
