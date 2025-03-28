import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartW100Filled'

      short_name='TableChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-614v-114q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v114H172Zm60 442q-24.75 0-42.37-17.63Q172-207.25 172-232v-354h148v414h-88Zm408 0v-414h148v354q0 24.75-17.62 42.37Q752.75-172 728-172h-88Zm-292 0v-414h264v414H348Z"/>
    </Icon>
  );
});

IconMaterialTableChartW100Filled.displayName = 'OnesyIconMaterialTableChartW100Filled';

export default IconMaterialTableChartW100Filled;
