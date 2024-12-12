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
      <path d="M228-398v-202h-68v-150h640v150h-68v202H228ZM92-212v-360h108v202h560v-202h108v360H92Z"/>
    </Icon>
  );
});

IconMaterialWeekendW100Filled.displayName = 'OnesyIconMaterialWeekendW100Filled';

export default IconMaterialWeekendW100Filled;
