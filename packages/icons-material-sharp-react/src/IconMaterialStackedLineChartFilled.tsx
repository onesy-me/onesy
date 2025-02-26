import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackedLineChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChartFilled'

      short_name='StackedLineChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m140-100-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Zm0-240-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z"/>
    </Icon>
  );
});

IconMaterialStackedLineChartFilled.displayName = 'OnesyIconMaterialStackedLineChartFilled';

export default IconMaterialStackedLineChartFilled;
