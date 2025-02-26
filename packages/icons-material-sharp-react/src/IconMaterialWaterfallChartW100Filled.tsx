import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterfallChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartW100Filled'

      short_name='WaterfallChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-212v-173h64v173h-64Zm183-218v-137h65v137h-65Zm184-182v-136h65v136h-65Zm184 400v-536h65v536h-65Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChartW100Filled.displayName = 'OnesyIconMaterialWaterfallChartW100Filled';

export default IconMaterialWaterfallChartW100Filled;
