import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileScreensaverFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreensaverFilled'

      short_name='MobileScreensaver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v204h40v192h-40v484H200Zm120-320h320L535-500l-75 100-55-73-85 113Zm280-200q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560Z"/>
    </Icon>
  );
});

IconMaterialMobileScreensaverFilled.displayName = 'OnesyIconMaterialMobileScreensaverFilled';

export default IconMaterialMobileScreensaverFilled;
