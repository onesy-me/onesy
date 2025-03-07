import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotDisturbOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffW100Filled'

      short_name='DoNotDisturbOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-65 22-122t61-103l-79-79q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5l-79-79q-46 39-103 61t-122 22Zm-54-362H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4 9.96 4 4 9 4h135l-28-28Zm314 162L606-466h34q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4-9.96-4-4-9-4h-63L332-740q-14-13.76-10.5-32.88Q325-792 342-800q32.25-14 66.63-21 34.37-7 70.95-7 72.3 0 135.89 27.44 63.58 27.44 110.62 74.47 47.03 47.04 74.47 110.62Q828-551.88 828-479.58q0 36.58-7 70.95-7 34.38-21 66.63-8 17-27 20.5T740-332Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffW100Filled.displayName = 'OnesyIconMaterialDoNotDisturbOffW100Filled';

export default IconMaterialDoNotDisturbOffW100Filled;
