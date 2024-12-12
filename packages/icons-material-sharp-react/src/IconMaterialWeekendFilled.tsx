import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeekendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendFilled'

      short_name='Weekend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-400h160v240h560v-240h160v400H40Zm240-240v-240H160v-160h640v160H680v240H280Z"/>
    </Icon>
  );
});

IconMaterialWeekendFilled.displayName = 'OnesyIconMaterialWeekendFilled';

export default IconMaterialWeekendFilled;
