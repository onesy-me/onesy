import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUTurnRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnRight'

      short_name='UTurnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120q-17 0-28.5-11.5T240-160v-440q0-100 70-170t170-70q100 0 170 70t70 170v168l36-36q11-11 28-11t28 11q11 11 11 28t-11 28L708-308q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L548-412q-11-11-11-28t11-28q11-11 28-11t28 11l36 36v-168q0-66-47-113t-113-47q-66 0-113 47t-47 113v440q0 17-11.5 28.5T280-120Z"/>
    </Icon>
  );
});

IconMaterialUTurnRight.displayName = 'OnesyIconMaterialUTurnRight';

export default IconMaterialUTurnRight;
