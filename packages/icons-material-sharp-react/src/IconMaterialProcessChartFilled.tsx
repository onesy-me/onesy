import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProcessChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChartFilled'

      short_name='ProcessChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-222-72-36 240-480 72 36-240 480Zm264 0-72-36 240-480 72 36-240 480Zm264 0-72-36 240-480 72 36-240 480Z"/>
    </Icon>
  );
});

IconMaterialProcessChartFilled.displayName = 'OnesyIconMaterialProcessChartFilled';

export default IconMaterialProcessChartFilled;
