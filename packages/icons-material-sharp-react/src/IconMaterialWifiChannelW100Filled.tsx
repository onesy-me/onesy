import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiChannelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiChannelW100Filled'

      short_name='WifiChannel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M149-146q12-78 32-171.5T228-486q23-62 46-95t46-33q20 0 40 24.5t39 70.5q20 46 37.5 111.5T471-259q12-137 29-240t38-173q22-71 47.5-106.5T640-814q34 0 61.5 45T752-638q28 109 42 244.5T813-146h-32q-21-91-65-165.5T640-386q-32 0-75 73t-66 167h-36q-13-87-31-166t-38-140q-20-61-39.5-97.5T320-586q-15 0-34.5 36.5T246-452q-20 61-38 140t-31 166h-28Zm349-90q32-85 69.5-131.5T640-414q35 0 73 47t69 131q-9-121-24-221t-34-174q-19-74-40-114.5T640-786q-22 0-43.5 41T556-630q-19 74-34 174t-24 220Z"/>
    </Icon>
  );
});

IconMaterialWifiChannelW100Filled.displayName = 'OnesyIconMaterialWifiChannelW100Filled';

export default IconMaterialWifiChannelW100Filled;
