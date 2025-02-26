import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChartDataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChartDataW100'

      short_name='ChartData'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-357 122-121 80 80 168-168v100h28v-148H546v28h100L498-438l-80-80-141 142 19 19ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialChartDataW100.displayName = 'OnesyIconMaterialChartDataW100';

export default IconMaterialChartDataW100;
