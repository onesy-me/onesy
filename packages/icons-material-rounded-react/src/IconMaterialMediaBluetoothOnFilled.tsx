import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaBluetoothOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOnFilled'

      short_name='MediaBluetoothOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T360-418v-382q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v80q0 17-11.5 28.5T560-680H440v400q0 66-47 113t-113 47Zm390-240L551-477q-7-7-7-17t7-17q7-7 17-7t17 7l93 93v-109q0-18 12-29.5t28-11.5q8 0 15 3t13 9l65 65q6 6 9 13.5t3 15.5q0 8-3 15t-9 13l-75 74 75 74q6 6 9 13t3 15q0 8-2.5 15.5T812-229l-64 64q-6 6-13 9t-15 3q-16 0-28-11t-12-29v-109l-93 93q-7 7-17 7t-17-7q-7-7-7-17t7-17l117-117Zm56 148 46-46-46-44v90Zm0-206 46-44-46-46v90Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOnFilled.displayName = 'OnesyIconMaterialMediaBluetoothOnFilled';

export default IconMaterialMediaBluetoothOnFilled;
