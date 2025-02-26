import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery4Bar'

      short_name='Battery4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480h240v-240H360v240ZM320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Z"/>
    </Icon>
  );
});

IconMaterialBattery4Bar.displayName = 'OnesyIconMaterialBattery4Bar';

export default IconMaterialBattery4Bar;
