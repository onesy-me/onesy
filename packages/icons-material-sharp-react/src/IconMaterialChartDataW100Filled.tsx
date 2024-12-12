import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChartDataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChartDataW100Filled'

      short_name='ChartData'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-357 122-121 80 80 168-168v100h28v-148H546v28h100L498-438l-80-80-141 142 19 19ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialChartDataW100Filled.displayName = 'OnesyIconMaterialChartDataW100Filled';

export default IconMaterialChartDataW100Filled;
