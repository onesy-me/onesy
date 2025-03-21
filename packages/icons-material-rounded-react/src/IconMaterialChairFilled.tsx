import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairFilled'

      short_name='Chair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-17 0-28.5-11.5T160-160v-40q-50 0-85-35t-35-85v-200q0-33 23.5-56.5T120-600q33 0 56.5 23.5T200-520v160h560v-160q0-33 23.5-56.5T840-600q33 0 56.5 23.5T920-520v200q0 50-35 85t-85 35v40q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120Zm80-320v-80q0-55-33.5-98.5T160-680v-40q0-50 35-85t85-35h400q50 0 85 35t35 85v40q-54 14-87 58.5T680-520v80H280Z"/>
    </Icon>
  );
});

IconMaterialChairFilled.displayName = 'OnesyIconMaterialChairFilled';

export default IconMaterialChairFilled;
