import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupedBarChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartFilled'

      short_name='GroupedBarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-17 0-28.5-11.5T160-200v-400q0-17 11.5-28.5T200-640h80q17 0 28.5 11.5T320-600v400q0 17-11.5 28.5T280-160h-80Zm200 0q-17 0-28.5-11.5T360-200v-200q0-17 11.5-28.5T400-440h80q17 0 28.5 11.5T520-400v200q0 17-11.5 28.5T480-160h-80Zm280 0q-17 0-28.5-11.5T640-200v-560q0-17 11.5-28.5T680-800h80q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160h-80Z"/>
    </Icon>
  );
});

IconMaterialGroupedBarChartFilled.displayName = 'OnesyIconMaterialGroupedBarChartFilled';

export default IconMaterialGroupedBarChartFilled;
