import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomPreferencesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferencesFilled'

      short_name='RoomPreferences'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v-640h400v40h160v240h-80v-160h-80v187q-73 35-116.5 103.5T440-280q0 42 13 83.5t37 76.5H120Zm320-320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM680-80l-12-60q-12-5-22.5-11T625-165l-58 20-40-69 45-40q-2-15-2-25.5t2-25.5l-45-40 40-69 58 20q10-8 20.5-14.5T668-420l12-60h80l12 60q12 5 22.5 11t20.5 14l58-20 40 69-45 40q2 15 2 25.5t-2 25.5l45 40-40 69-58-19q-10 8-20.5 14T772-140l-12 60h-80Zm40-120q33 0 56.5-23.5T800-280q0-33-23.5-56.5T720-360q-33 0-56.5 23.5T640-280q0 33 23.5 56.5T720-200Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferencesFilled.displayName = 'OnesyIconMaterialRoomPreferencesFilled';

export default IconMaterialRoomPreferencesFilled;
