import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseFilled'

      short_name='TabClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m476-420 84-84 84 84 56-56-84-84 84-84-56-56-84 84-84-84-56 56 84 84-84 84 56 56ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialTabCloseFilled.displayName = 'OnesyIconMaterialTabCloseFilled';

export default IconMaterialTabCloseFilled;
