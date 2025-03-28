import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsFilled'

      short_name='News'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h407q16 0 30.5 6t25.5 17l154 154q11 11 17 25.5t6 30.5v407q0 33-23.5 56.5T760-120H200Zm400-640v120q0 17 11.5 28.5T640-600h120L600-760Zm40 480q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280h320ZM440-600q17 0 28.5-11.5T480-640q0-17-11.5-28.5T440-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600h120Zm200 160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440h320Z"/>
    </Icon>
  );
});

IconMaterialNewsFilled.displayName = 'OnesyIconMaterialNewsFilled';

export default IconMaterialNewsFilled;
