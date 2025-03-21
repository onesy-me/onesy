import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUTurnLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnLeft'

      short_name='UTurnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-297q-8 0-15-2.5t-13-8.5L148-412q-11-11-11-28t11-28q11-11 28-11t28 11l36 36v-168q0-100 70-170t170-70q100 0 170 70t70 170v440q0 17-11.5 28.5T680-120q-17 0-28.5-11.5T640-160v-440q0-66-47-113t-113-47q-66 0-113 47t-47 113v168l36-36q11-11 28-11t28 11q11 11 11 28t-11 28L308-308q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialUTurnLeft.displayName = 'OnesyIconMaterialUTurnLeft';

export default IconMaterialUTurnLeft;
