import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackedLineChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChart'

      short_name='StackedLineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M2,19.99l7.5-7.51l4,4l7.09-7.97L22,9.92l-8.5,9.56l-4-4l-6,6.01L2,19.99z M3.5,15.49l6-6.01l4,4L22,3.92l-1.41-1.41 l-7.09,7.97l-4-4L2,13.99L3.5,15.49z"/>
    </Icon>
  );
});

IconMaterialStackedLineChart.displayName = 'OnesyIconMaterialStackedLineChart';

export default IconMaterialStackedLineChart;
