import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Road'

      short_name='Road'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-640h80v640h-80Zm280 0v-160h80v160h-80Zm280 0v-640h80v640h-80ZM440-400v-160h80v160h-80Zm0-240v-160h80v160h-80Z"/>
    </Icon>
  );
});

IconMaterialRoad.displayName = 'OnesyIconMaterialRoad';

export default IconMaterialRoad;
