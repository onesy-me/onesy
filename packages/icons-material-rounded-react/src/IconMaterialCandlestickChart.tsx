import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCandlestickChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChart'

      short_name='CandlestickChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-200v-40h-40q-17 0-28.5-11.5T200-280v-400q0-17 11.5-28.5T240-720h40v-40q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v40h40q17 0 28.5 11.5T440-680v400q0 17-11.5 28.5T400-240h-40v40q0 17-11.5 28.5T320-160q-17 0-28.5-11.5T280-200Zm0-120h80v-320h-80v320Zm320 120v-160h-40q-17 0-28.5-11.5T520-400v-200q0-17 11.5-28.5T560-640h40v-120q0-17 11.5-28.5T640-800q17 0 28.5 11.5T680-760v120h40q17 0 28.5 11.5T760-600v200q0 17-11.5 28.5T720-360h-40v160q0 17-11.5 28.5T640-160q-17 0-28.5-11.5T600-200Zm0-240h80v-120h-80v120Zm-280-40Zm320-20Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChart.displayName = 'OnesyIconMaterialCandlestickChart';

export default IconMaterialCandlestickChart;
