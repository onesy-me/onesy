import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAreaChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChart'

      short_name='AreaChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-520l160 120 200-280 200 160h160v520H120Zm200-120 160-220 280 218v-318H652L496-725 298-447l-98-73v144l120 96Z"/>
    </Icon>
  );
});

IconMaterialAreaChart.displayName = 'OnesyIconMaterialAreaChart';

export default IconMaterialAreaChart;
