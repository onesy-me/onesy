import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery0Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery0Bar'

      short_name='Battery0Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Zm40-80h240v-560H360v560Z"/>
    </Icon>
  );
});

IconMaterialBattery0Bar.displayName = 'OnesyIconMaterialBattery0Bar';

export default IconMaterialBattery0Bar;
