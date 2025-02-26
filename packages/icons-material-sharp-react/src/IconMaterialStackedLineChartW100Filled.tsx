import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackedLineChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChartW100Filled'

      short_name='StackedLineChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m140-140-20-20 264-264 160 160 278-320 20 18-296 344-162-162-244 244Zm0-240-20-20 264-264 160 160 278-320 20 18-296 344-162-162-244 244Z"/>
    </Icon>
  );
});

IconMaterialStackedLineChartW100Filled.displayName = 'OnesyIconMaterialStackedLineChartW100Filled';

export default IconMaterialStackedLineChartW100Filled;
