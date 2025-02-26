import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCandlestickChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChartFilled'

      short_name='CandlestickChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-200v-40h-40q-17 0-28.5-11.5T200-280v-400q0-17 11.5-28.5T240-720h40v-40q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v40h40q17 0 28.5 11.5T440-680v400q0 17-11.5 28.5T400-240h-40v40q0 17-11.5 28.5T320-160q-17 0-28.5-11.5T280-200Zm320 0v-160h-40q-17 0-28.5-11.5T520-400v-200q0-17 11.5-28.5T560-640h40v-120q0-17 11.5-28.5T640-800q17 0 28.5 11.5T680-760v120h40q17 0 28.5 11.5T760-600v200q0 17-11.5 28.5T720-360h-40v160q0 17-11.5 28.5T640-160q-17 0-28.5-11.5T600-200Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChartFilled.displayName = 'OnesyIconMaterialCandlestickChartFilled';

export default IconMaterialCandlestickChartFilled;
