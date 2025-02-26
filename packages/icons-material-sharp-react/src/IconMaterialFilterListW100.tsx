import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListW100'

      short_name='FilterList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M429-292v-28h101v28H429ZM282-466v-28h395v28H282ZM172-640v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFilterListW100.displayName = 'OnesyIconMaterialFilterListW100';

export default IconMaterialFilterListW100;
