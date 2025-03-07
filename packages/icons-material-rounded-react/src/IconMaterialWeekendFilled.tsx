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
      <path d="M160-160q-50 0-85-35t-35-85v-200q0-33 23.5-56.5T120-560q33 0 56.5 23.5T200-480v160h560v-160q0-33 23.5-56.5T840-560q33 0 56.5 23.5T920-480v200q0 50-35 85t-85 35H160Zm120-240v-80q0-53-34.5-93T160-628v-52q0-50 35-85t85-35h400q50 0 85 35t35 85v52q-53 11-86.5 52.5T680-480v80H280Z"/>
    </Icon>
  );
});

IconMaterialWeekendFilled.displayName = 'OnesyIconMaterialWeekendFilled';

export default IconMaterialWeekendFilled;
