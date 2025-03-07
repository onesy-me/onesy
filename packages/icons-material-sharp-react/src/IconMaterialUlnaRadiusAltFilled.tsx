import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUlnaRadiusAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UlnaRadiusAltFilled'

      short_name='UlnaRadiusAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-449 220-351q75 37 139 101.5T535-564q36-38 79.5-61T736-668q46-13 79.5-25t64.5-27v386L580-145q-19 12-40.5 18.5T494-120q-30 0-58-11.5T385-164L80-449Zm430 189q17 0 28.5-11.5T550-300q0-2-4-17l142-89q5 8 13.5 12t18.5 4q17 0 28.5-11.5T760-430q0-14-9-25t-23-14q1-2 1.5-5t.5-6q0-17-11.5-28.5T690-520q-17 0-28.5 11.5T650-480q0 4 7 22l-142 88q-5-9-14.5-14.5T480-390q-17 0-28.5 11.5T440-350q0 14 9 25t23 14q-1 2-1.5 5t-.5 6q0 17 11.5 28.5T510-260Z"/>
    </Icon>
  );
});

IconMaterialUlnaRadiusAltFilled.displayName = 'OnesyIconMaterialUlnaRadiusAltFilled';

export default IconMaterialUlnaRadiusAltFilled;
