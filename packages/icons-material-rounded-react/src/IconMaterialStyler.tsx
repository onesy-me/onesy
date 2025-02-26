import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStyler = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Styler'

      short_name='Styler'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-400h64q0-17 11.5-28.5T320-440h320q17 0 28.5 11.5T680-400h64q7 0 11.5-5t4.5-13q0-5-2.5-8.5T750-432L480-552 210-432q-5 2-7.5 5.5T200-418q0 8 4.5 13t11.5 5Zm144 240h240v-200H360v200Zm209-594q-15 7-30 .5T517-775q-5-11-14.5-18t-22.5-7q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720t28.5 11.5Q520-697 520-680v58l262 116q26 12 42 36.5t16 53.5q0 40-28 68t-68 28h-64v200q0 17-11.5 28.5T640-80H320q-17 0-28.5-11.5T280-120v-200h-64q-40 0-68-28t-28-68q0-29 16-53.5t42-36.5l262-116v-26q-36-13-58-43.5T360-760q0-50 35-85t85-35q38 0 67.5 21t43.5 53q7 15 0 30t-22 22ZM360-360h240-240Z"/>
    </Icon>
  );
});

IconMaterialStyler.displayName = 'OnesyIconMaterialStyler';

export default IconMaterialStyler;
