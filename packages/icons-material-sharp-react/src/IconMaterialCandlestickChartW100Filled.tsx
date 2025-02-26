import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCandlestickChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChartW100Filled'

      short_name='CandlestickChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-212v-80h-80v-376h80v-80h28v80h80v376h-80v80h-28Zm268 0v-180h-80v-206h80v-150h28v150h80v206h-80v180h-28Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChartW100Filled.displayName = 'OnesyIconMaterialCandlestickChartW100Filled';

export default IconMaterialCandlestickChartW100Filled;
