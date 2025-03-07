import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatPumpBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalance'

      short_name='HeatPumpBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M807-656h-47q-17 0-28.5 11.5T720-616v280q0 50-35 85t-85 35q-50 0-85-35t-35-85v-240q0-17-11.5-28.5T440-616q-17 0-28.5 11.5T400-576v240q0 50-35 85t-85 35q-50 0-85-35t-35-85v-320q0-17 11.5-28.5T200-696q17 0 28.5 11.5T240-656v320q0 17 11.5 28.5T280-296q17 0 28.5-11.5T320-336v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 17 11.5 28.5T600-296q17 0 28.5-11.5T640-336v-280q0-50 35-85t85-35h47l-19-19q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l87 87q12 12 12 28t-12 28l-88 87q-12 11-28.5 11.5T788-581q-11-12-11-29t12-28l18-18ZM120-96q-33 0-56.5-23.5T40-176v-280q0-17 11.5-28.5T80-496h800q17 0 28.5 11.5T920-456v280q0 33-23.5 56.5T840-96H120Zm0-80h720v-240H120v240Zm720-240H120h720Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalance.displayName = 'OnesyIconMaterialHeatPumpBalance';

export default IconMaterialHeatPumpBalance;
