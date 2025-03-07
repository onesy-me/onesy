import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupedBarChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartW100Filled'

      short_name='GroupedBarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-212q-12.75 0-21.37-8.63Q212-229.25 212-242v-331q0-12.75 8.63-21.38Q229.25-603 242-603h48q12.75 0 21.38 8.62Q320-585.75 320-573v331q0 12.75-8.62 21.37Q302.75-212 290-212h-48Zm168 0q-12.75 0-21.37-8.64-8.63-8.63-8.63-21.4v-150.19q0-12.77 8.63-21.27 8.62-8.5 21.37-8.5h48q12.75 0 21.38 8.64 8.62 8.63 8.62 21.4v150.19q0 12.77-8.62 21.27-8.63 8.5-21.38 8.5h-48Zm260 0q-12.75 0-21.37-8.63Q640-229.25 640-242v-476q0-12.75 8.63-21.38Q657.25-748 670-748h48q12.75 0 21.38 8.62Q748-730.75 748-718v476q0 12.75-8.62 21.37Q730.75-212 718-212h-48Z"/>
    </Icon>
  );
});

IconMaterialGroupedBarChartW100Filled.displayName = 'OnesyIconMaterialGroupedBarChartW100Filled';

export default IconMaterialGroupedBarChartW100Filled;
