import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNextWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekW100Filled'

      short_name='NextWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm268-496h160v-80H400v80Zm40 372 124-124-124-124-20 20 104 104-104 104 20 20Z"/>
    </Icon>
  );
});

IconMaterialNextWeekW100Filled.displayName = 'OnesyIconMaterialNextWeekW100Filled';

export default IconMaterialNextWeekW100Filled;
