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
      <path d="M160-160v-480h160v480H160Zm200 0v-280h160v280H360Zm280 0v-640h160v640H640Z"/>
    </Icon>
  );
});

IconMaterialGroupedBarChartFilled.displayName = 'OnesyIconMaterialGroupedBarChartFilled';

export default IconMaterialGroupedBarChartFilled;
