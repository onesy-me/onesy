import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSsidChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChart'

      short_name='SsidChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 232-360l-112 80v-98l120-86 245 238 167-134h188v80H680L480-120Zm0-360L305-655 120-520v-99l193-141 175 175 352-255v99L480-480Z"/>
    </Icon>
  );
});

IconMaterialSsidChart.displayName = 'OnesyIconMaterialSsidChart';

export default IconMaterialSsidChart;
