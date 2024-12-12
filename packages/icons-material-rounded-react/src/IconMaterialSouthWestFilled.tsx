import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthWestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestFilled'

      short_name='SouthWest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200q-17 0-28.5-11.5T200-240v-320q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560v224l436-436q11-11 28-11t28 11q11 11 11 28t-11 28L336-280h224q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200H240Z"/>
    </Icon>
  );
});

IconMaterialSouthWestFilled.displayName = 'OnesyIconMaterialSouthWestFilled';

export default IconMaterialSouthWestFilled;
