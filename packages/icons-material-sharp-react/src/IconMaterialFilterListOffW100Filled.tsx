import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterListOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOffW100Filled'

      short_name='FilterListOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 126-794l20-20 668 668-20 20ZM607-466l-28-28h98v28h-70ZM433-640l-28-28h383v28H433Zm-4 348v-28h101v28H429ZM282-466v-28h172v28H282ZM172-640v-28h108v28H172Z"/>
    </Icon>
  );
});

IconMaterialFilterListOffW100Filled.displayName = 'OnesyIconMaterialFilterListOffW100Filled';

export default IconMaterialFilterListOffW100Filled;
