import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClockArrowUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClockArrowUp'

      short_name='ClockArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-180q-125 0-212.5-87.5T40-480q0-125 87.5-212.5T340-780q125 0 212.5 87.5T640-480q0 125-87.5 212.5T340-180Zm400 20v-488l-44 44-56-56 140-140 140 140-57 56-43-43v487h-80ZM340-260q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Zm80-80 56-56-96-97v-147h-80v180l120 120Zm-80-140Z"/>
    </Icon>
  );
});

IconMaterialClockArrowUp.displayName = 'OnesyIconMaterialClockArrowUp';

export default IconMaterialClockArrowUp;
