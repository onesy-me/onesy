import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenWithFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenWithFilled'

      short_name='OpenWith'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 310-250l57-57 73 73v-166h80v165l72-73 58 58L480-80ZM250-310 80-480l169-169 57 57-72 72h166v80H235l73 72-58 58Zm460 0-57-57 73-73H560v-80h165l-73-72 58-58 170 170-170 170ZM440-560v-166l-73 73-57-57 170-170 170 170-57 57-73-73v166h-80Z"/>
    </Icon>
  );
});

IconMaterialOpenWithFilled.displayName = 'OnesyIconMaterialOpenWithFilled';

export default IconMaterialOpenWithFilled;
