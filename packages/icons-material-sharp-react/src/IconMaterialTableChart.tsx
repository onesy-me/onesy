import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChart'

      short_name='TableChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-520h560v-120H200v120Zm0 440h100v-360H200v360Zm460 0h100v-360H660v360Zm-280 0h200v-360H380v360Z"/>
    </Icon>
  );
});

IconMaterialTableChart.displayName = 'OnesyIconMaterialTableChart';

export default IconMaterialTableChart;
