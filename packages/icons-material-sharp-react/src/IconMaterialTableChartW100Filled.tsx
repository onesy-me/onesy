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
      <path d="M172-614v-174h616v174H172Zm0 442v-414h148v414H172Zm468 0v-414h148v414H640Zm-292 0v-414h264v414H348Z"/>
    </Icon>
  );
});

IconMaterialTableChartW100Filled.displayName = 'OnesyIconMaterialTableChartW100Filled';

export default IconMaterialTableChartW100Filled;
