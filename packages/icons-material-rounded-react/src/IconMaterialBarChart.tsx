import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChart'

      short_name='BarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160q-17 0-28.5-11.5T640-200v-200q0-17 11.5-28.5T680-440h80q17 0 28.5 11.5T800-400v200q0 17-11.5 28.5T760-160h-80Zm-240 0q-17 0-28.5-11.5T400-200v-560q0-17 11.5-28.5T440-800h80q17 0 28.5 11.5T560-760v560q0 17-11.5 28.5T520-160h-80Zm-240 0q-17 0-28.5-11.5T160-200v-360q0-17 11.5-28.5T200-600h80q17 0 28.5 11.5T320-560v360q0 17-11.5 28.5T280-160h-80Z"/>
    </Icon>
  );
});

IconMaterialBarChart.displayName = 'OnesyIconMaterialBarChart';

export default IconMaterialBarChart;
