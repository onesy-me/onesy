import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirPurifierGenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierGenFilled'

      short_name='AirPurifierGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-600q0-50 35-85t85-35h160q50 0 85 35t35 85v80H400q-33 0-56.5 23.5T320-560v200q0 33 23.5 56.5T400-280h120v160H120Zm569-141q-26 0-51.5-7T588-286l25-76q22 10 41 15.5t35 5.5q12 0 24-3.5t25-12.5q23-16 49-22.5t46-6.5q25 0 51 7t49 17l-25 76q-26-9-44.5-14.5T832-306q-14 0-28.5 4.5T775-286q-17 12-39.5 18.5T689-261Zm-169-99H400v-200h120v200Zm168-57q-26 0-51-7t-49-18l25-76q20 9 39.5 15t36.5 6q12 0 24-4t25-12q24-17 48-23t46-6q25 0 51.5 6.5T933-518l-25 76q-23-8-42.5-14t-33.5-6q-12 0-26.5 4.5T775-442q-21 14-42.5 19.5T688-417Zm1-156q-26 0-52-7t-49-18l25-76q26 11 44 16t32 5q12 0 24-3.5t25-12.5q25-17 48.5-23t45.5-6q25 0 50 6.5t51 17.5l-25 76q-26-9-44-14.5t-32-5.5q-13 0-26.5 4T775-598q-18 13-40.5 19t-45.5 6Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierGenFilled.displayName = 'OnesyIconMaterialAirPurifierGenFilled';

export default IconMaterialAirPurifierGenFilled;
