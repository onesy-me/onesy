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
      <path d="M688-417q-16 0-31.5-3t-31.5-8q-16-5-22.5-20t-1.5-32q5-15 19-22t30-2q11 3 20.5 5t18.5 2q12 0 24-4t25-12q24-17 48-23t46-6q15 0 31 2.5t32 7.5q16 5 23.5 20t2.5 32q-5 16-20 23t-31 2q-11-3-20.5-5t-17.5-2q-12 0-26.5 4.5T775-442q-21 14-42.5 19.5T688-417Zm1-156q-16 0-32-3t-32-8q-16-5-23-20t-2-32q5-15 19.5-22t30.5-2q11 4 21 5.5t18 1.5q12 0 24-3.5t25-12.5q25-17 48.5-23t45.5-6q16 0 31.5 2.5T895-688q16 5 23 20t2 32q-5 16-19.5 23t-30.5 2q-11-4-20.5-5.5T832-618q-13 0-26.5 4T775-598q-18 13-40.5 19t-45.5 6Zm0 312q-17 0-32.5-3t-31.5-8q-16-5-22.5-20t-1.5-32q5-15 19-22t30-2q11 3 21 5t18 2q12 0 24-3.5t25-12.5q23-16 49-22.5t46-6.5q15 0 30.5 2.5T895-376q16 5 23.5 20t2.5 32q-5 16-20 23t-31 2q-12-4-21-5.5t-17-1.5q-14 0-28.5 4.5T775-286q-17 12-39.5 18.5T689-261ZM160-120q-17 0-28.5-11.5T120-160v-560q0-50 35-85t85-35h160q50 0 85 35t35 85v80H400q-33 0-56.5 23.5T320-560v200q0 33 23.5 56.5T400-280h120v120q0 17-11.5 28.5T480-120H160Zm360-240H400v-200h120v200Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierGenFilled.displayName = 'OnesyIconMaterialAirPurifierGenFilled';

export default IconMaterialAirPurifierGenFilled;
