import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGamepadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GamepadFilled'

      short_name='Gamepad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m452-568-80-80q-6-6-9-13.5t-3-15.5v-163q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v163q0 8-3 15.5t-9 13.5l-80 80q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5Zm116 116q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l80-80q6-6 13.5-9t15.5-3h163q17 0 28.5 11.5T880-560v160q0 17-11.5 28.5T840-360H677q-8 0-15.5-3t-13.5-9l-80-80ZM80-400v-160q0-17 11.5-28.5T120-600h163q8 0 15.5 3t13.5 9l80 80q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-80 80q-6 6-13.5 9t-15.5 3H120q-17 0-28.5-11.5T80-400Zm280 280v-163q0-8 3-15.5t9-13.5l80-80q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l80 80q6 6 9 13.5t3 15.5v163q0 17-11.5 28.5T560-80H400q-17 0-28.5-11.5T360-120Z"/>
    </Icon>
  );
});

IconMaterialGamepadFilled.displayName = 'OnesyIconMaterialGamepadFilled';

export default IconMaterialGamepadFilled;
