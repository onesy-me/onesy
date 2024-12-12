import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterfallChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartFilled'

      short_name='WaterfallChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-240h120v240H120Zm200-240v-200h120v200H320Zm200-200v-200h120v200H520Zm200 440v-640h120v640H720Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChartFilled.displayName = 'OnesyIconMaterialWaterfallChartFilled';

export default IconMaterialWaterfallChartFilled;
