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
      <path d="M163-146q-5 0-9-4.5t-3-9.5q12-77 31.5-166T228-486q23-63 46-95.5t46-32.5q20 0 39 23t39 68q20 45 38 111t35 153q12-137 29-239.5T538-672q21-71 47-106.5t55-35.5q33 0 61 44t51 132q27 105 41 235t19 241q0 7-4 11.5t-11 4.5q-7 0-12.5-4.5T777-162q-11-40-26.5-78.5T716-311q-21-35-41-55t-35-20q-15 0-33.5 18T569-320q-19 30-36 70t-29 85q-2 8-8.5 13.5T481-146q-8 0-13.5-6t-7.5-14q-13-84-31-159.5T391-459q-20-58-38.5-92.5T320-586q-15 0-34.5 36.5T246-451q-19 59-36.5 134T179-160q-1 6-5.5 10t-10.5 4Zm335-90q32-85 69.5-131.5T640-414q35 0 73 47.5T782-236q-9-121-24-221.5T724-631q-19-73-40.5-114T640-786q-22 0-43.5 41T556-630q-19 74-34 174t-24 220Z"/>
    </Icon>
  );
});

IconMaterialWifiChannelW100Filled.displayName = 'OnesyIconMaterialWifiChannelW100Filled';

export default IconMaterialWifiChannelW100Filled;
