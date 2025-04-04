import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDryCleaning = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaning'

      short_name='DryCleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80q-33 0-56.5-23.5T280-160v-160h-64q-40 0-68-28t-28-68q0-29 16-53.5t42-36.5l262-116v-26q-36-13-58-43.5T360-760q0-50 35-85t85-35q36 0 66 20t44 52l4 17q0 17-11.5 28.5T554-751q-13 0-22.5-7T517-776q-5-11-15-17.5t-22-6.5q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720t28.5 11.5Q520-697 520-680v58l262 116q26 12 42 36.5t16 53.5q0 40-28 68t-68 28h-64v160q0 33-23.5 56.5T600-80H360ZM216-400h75q11-18 29-29t40-11h240q22 0 40 11t29 29h75q7 0 11.5-5t4.5-13q0-5-2.5-8.5T750-432L480-552 210-432q-5 2-7.5 5.5T200-418q0 8 4.5 13t11.5 5Zm144 240h240v-200H360v200Zm0-200h240-240Z"/>
    </Icon>
  );
});

IconMaterialDryCleaning.displayName = 'OnesyIconMaterialDryCleaning';

export default IconMaterialDryCleaning;
