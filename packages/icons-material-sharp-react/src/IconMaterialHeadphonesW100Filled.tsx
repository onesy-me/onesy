import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadphonesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesW100Filled'

      short_name='Headphones'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-172H172v-307.86Q172-544 196-600t66-98q42-42 97.94-66 55.95-24 120-24Q544-788 600-764t98 66q42 42 66 98.01 24 56.01 24 120.15V-172H648v-224h112v-84q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v84h112v224Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesW100Filled.displayName = 'OnesyIconMaterialHeadphonesW100Filled';

export default IconMaterialHeadphonesW100Filled;
