import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery6BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery6BarFilled'

      short_name='Battery6Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Zm40-560h240v-80H360v80Z"/>
    </Icon>
  );
});

IconMaterialBattery6BarFilled.displayName = 'OnesyIconMaterialBattery6BarFilled';

export default IconMaterialBattery6BarFilled;
