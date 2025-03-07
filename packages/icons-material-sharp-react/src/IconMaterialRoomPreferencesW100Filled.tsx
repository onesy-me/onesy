import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomPreferencesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferencesW100Filled'

      short_name='RoomPreferences'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M198-172v-28h80v-588h296v40h108v230h-28v-202h-80v246q-42 35-65.5 78.5T485-296q0 37 10 65t28 59H198Zm268-280q11 0 19.5-8.5T494-480q0-11-8.5-19.5T466-508q-11 0-19.5 8.5T438-480q0 11 8.5 19.5T466-452Zm228 298-2-27q-26-5-42-15t-30-25l-24 13-18-24 23-18q-9-24-9-46t9-46l-23-18 18-24 24 13q14-15 30-25t42-15l2-27h28l2 27q26 5 42 15t30 25l24-13 18 24-23 18q9 24 9 46t-9 46l23 18-18 24-24-13q-14 15-30 25t-42 15l-2 27h-28Zm14-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferencesW100Filled.displayName = 'OnesyIconMaterialRoomPreferencesW100Filled';

export default IconMaterialRoomPreferencesW100Filled;
