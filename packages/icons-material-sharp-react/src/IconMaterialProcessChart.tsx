import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProcessChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChart'

      short_name='ProcessChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-222-72-36 240-480 72 36-240 480Zm264 0-72-36 240-480 72 36-240 480Zm264 0-72-36 240-480 72 36-240 480Z"/>
    </Icon>
  );
});

IconMaterialProcessChart.displayName = 'OnesyIconMaterialProcessChart';

export default IconMaterialProcessChart;
