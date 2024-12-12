import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndW100Filled'

      short_name='CallEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-614q109 0 215.5 43.5T877-452q13 13 13.5 30.5T878-392l-51 49q-14 13-30 15t-30-8l-76-58q-13-10-19-21t-6-25v-111q-52-19-95-27t-91-8q-48 0-91 8t-95 27v111q0 14-6 25t-19 21l-76 58q-14 10-30 8t-30-15l-51-49q-13-12-12.5-29.5T83-452q75-75 181.5-118.5T480-614Z"/>
    </Icon>
  );
});

IconMaterialCallEndW100Filled.displayName = 'OnesyIconMaterialCallEndW100Filled';

export default IconMaterialCallEndW100Filled;
