import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupedBarChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartW100'

      short_name='GroupedBarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-391h108v391H212Zm168 0v-210h108v210H380Zm260 0v-536h108v536H640Z"/>
    </Icon>
  );
});

IconMaterialGroupedBarChartW100.displayName = 'OnesyIconMaterialGroupedBarChartW100';

export default IconMaterialGroupedBarChartW100;
