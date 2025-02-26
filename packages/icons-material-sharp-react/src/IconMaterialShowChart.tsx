import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShowChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChart'

      short_name='ShowChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z"/>
    </Icon>
  );
});

IconMaterialShowChart.displayName = 'OnesyIconMaterialShowChart';

export default IconMaterialShowChart;
