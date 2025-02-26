import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterfallChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChart'

      short_name='WaterfallChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-240h120v240H120Zm200-240v-200h120v200H320Zm200-200v-200h120v200H520Zm200 440v-640h120v640H720Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChart.displayName = 'OnesyIconMaterialWaterfallChart';

export default IconMaterialWaterfallChart;
