import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScatterPlotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScatterPlotW100Filled'

      short_name='ScatterPlot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M668-184q-44.55 0-76.28-31.73Q560-247.45 560-292t31.72-76.27Q623.45-400 668-400t76.28 31.73Q776-336.55 776-292t-31.72 76.27Q712.55-184 668-184ZM292-304q-44.55 0-76.27-31.73Q184-367.45 184-412t31.73-76.27Q247.45-520 292-520t76.27 31.73Q400-456.55 400-412t-31.73 76.27Q336.55-304 292-304Zm148-288q-44.55 0-76.27-31.72Q332-655.45 332-700t31.73-76.28Q395.45-808 440-808t76.28 31.72Q548-744.55 548-700t-31.72 76.28Q484.55-592 440-592Z"/>
    </Icon>
  );
});

IconMaterialScatterPlotW100Filled.displayName = 'OnesyIconMaterialScatterPlotW100Filled';

export default IconMaterialScatterPlotW100Filled;
