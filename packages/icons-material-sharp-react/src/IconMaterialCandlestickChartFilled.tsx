import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCandlestickChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChartFilled'

      short_name='CandlestickChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-80h-80v-480h80v-80h80v80h80v480h-80v80h-80Zm320 0v-200h-80v-280h80v-160h80v160h80v280h-80v200h-80Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChartFilled.displayName = 'OnesyIconMaterialCandlestickChartFilled';

export default IconMaterialCandlestickChartFilled;
