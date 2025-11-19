import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerArrowDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerArrowDown'

      short_name='TimerArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-160q-125 0-212.5-87.5T40-460q0-125 87.5-212.5T340-760q52 0 98 16.5t84 45.5l42-42 56 56-42 42q29 38 45.5 84.5T640-460q0 125-87.5 212.5T340-160Zm440 0L640-300l56-56 44 44v-488h80v487l43-43 57 56-140 140ZM240-800v-80h200v80H240Zm100 560q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Zm-40-180h80v-200h-80v200Zm40-40Z"/>
    </Icon>
  );
});

IconMaterialTimerArrowDown.displayName = 'OnesyIconMaterialTimerArrowDown';

export default IconMaterialTimerArrowDown;
