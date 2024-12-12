import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeekendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendW100Filled'

      short_name='Weekend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-29 0-48.5-19.5T92-308v-190q0-21 16-35.5t38-14.5q22 0 38 14.5t16 35.5v124h560v-124q0-21 16-35.5t38-14.5q22 0 38 14.5t16 35.5v190q0 29-19.5 48.5T800-240H160Zm68-162v-106q0-29-19.5-48.5T160-576v-60q0-29 19.5-48.5T228-704h504q29 0 48.5 19.5T800-636v60q-29 1-48.5 20.5T732-508v106H228Z"/>
    </Icon>
  );
});

IconMaterialWeekendW100Filled.displayName = 'OnesyIconMaterialWeekendW100Filled';

export default IconMaterialWeekendW100Filled;
