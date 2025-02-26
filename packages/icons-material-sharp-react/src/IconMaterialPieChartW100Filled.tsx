import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPieChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartW100Filled'

      short_name='PieChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-494v-332q137 5 231.5 100T826-494H494Zm-28 359q-139-5-235-105t-96-240q0-141 96-241t235-105v691Zm28 0v-331h332q-6 136-100.5 231T494-135Z"/>
    </Icon>
  );
});

IconMaterialPieChartW100Filled.displayName = 'OnesyIconMaterialPieChartW100Filled';

export default IconMaterialPieChartW100Filled;
