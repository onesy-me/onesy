import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBuildCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildCircleFilled'

      short_name='BuildCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m620-284 56-56q6-6 6-14t-6-14L540-505q4-11 6-22t2-25q0-57-40.5-97.5T410-690q-11 0-21 1t-20 5q-9 4-11 14t5 17l74 74-56 56-74-74q-7-7-17-5t-14 11q-3 10-4.5 20t-1.5 21q0 57 40.5 97.5T408-412q13 0 24.5-2t22.5-6l137 136q6 6 14 6t14-6ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialBuildCircleFilled.displayName = 'OnesyIconMaterialBuildCircleFilled';

export default IconMaterialBuildCircleFilled;
