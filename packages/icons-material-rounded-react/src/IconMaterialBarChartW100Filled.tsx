import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartW100Filled'

      short_name='BarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M670-212q-12.75 0-21.37-8.63Q640-229.25 640-242v-106q0-12.75 8.63-21.38Q657.25-378 670-378h48q12.75 0 21.38 8.62Q748-360.75 748-348v106q0 12.75-8.62 21.37Q730.75-212 718-212h-48Zm-214 0q-12.75 0-21.37-8.63Q426-229.25 426-242v-476q0-12.75 8.63-21.38Q443.25-748 456-748h48q12.75 0 21.38 8.62Q534-730.75 534-718v476q0 12.75-8.62 21.37Q516.75-212 504-212h-48Zm-214 0q-12.75 0-21.37-8.63Q212-229.25 212-242v-285.52q0-13.48 8.63-21.98 8.62-8.5 21.37-8.5h48q12.75 0 21.38 8.62Q320-540.75 320-528v285.52q0 13.48-8.62 21.98-8.63 8.5-21.38 8.5h-48Z"/>
    </Icon>
  );
});

IconMaterialBarChartW100Filled.displayName = 'OnesyIconMaterialBarChartW100Filled';

export default IconMaterialBarChartW100Filled;
