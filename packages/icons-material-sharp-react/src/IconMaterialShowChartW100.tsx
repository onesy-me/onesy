import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShowChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartW100'

      short_name='ShowChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m140-256-20-20 264-264 160 160 278-320 20 18-296 344-162-162-244 244Z"/>
    </Icon>
  );
});

IconMaterialShowChartW100.displayName = 'OnesyIconMaterialShowChartW100';

export default IconMaterialShowChartW100;
