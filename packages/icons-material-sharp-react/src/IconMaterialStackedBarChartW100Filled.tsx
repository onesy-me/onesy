import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackedBarChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChartW100Filled'

      short_name='StackedBarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-400h108v400H212Zm0-428v-108h108v108H212Zm215 428-1-292h108v292H427Zm-1-320v-108h108v108H426Zm214 320v-183h108v183H640Zm0-211v-108h108v108H640Z"/>
    </Icon>
  );
});

IconMaterialStackedBarChartW100Filled.displayName = 'OnesyIconMaterialStackedBarChartW100Filled';

export default IconMaterialStackedBarChartW100Filled;
