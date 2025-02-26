import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClockLoader90W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClockLoader90W100'

      short_name='ClockLoader90'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM254-706.17 480-480v-320q-64 0-122.5 24.5T254-706.17Z"/>
    </Icon>
  );
});

IconMaterialClockLoader90W100.displayName = 'OnesyIconMaterialClockLoader90W100';

export default IconMaterialClockLoader90W100;
