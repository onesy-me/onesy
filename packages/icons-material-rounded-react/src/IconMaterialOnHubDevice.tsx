import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnHubDevice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnHubDevice'

      short_name='OnHubDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h240q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360Zm-43-157-37-477q-3-35 21-60.5t59-25.5h240q35 0 59 25.5t21 60.5l-37 477q-2 16-13 26.5T603-240H357q-16 0-27-10.5T317-277Zm77-43h172l34-440H360l34 440Zm0-440h-34 240-206Z"/>
    </Icon>
  );
});

IconMaterialOnHubDevice.displayName = 'OnesyIconMaterialOnHubDevice';

export default IconMaterialOnHubDevice;
