import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomPreferencesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferencesW100'

      short_name='RoomPreferences'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M198-172v-28h80v-588h296v40h108v230h-28v-202h-80v264h-28v-304H306v560h188v28H198Zm496 18-2-27q-26-5-42-15t-30-25l-24 13-18-24 23-18q-9-24-9-46t9-46l-23-18 18-24 24 13q14-15 30-25t42-15l2-27h28l2 27q26 5 42 15t30 25l24-13 18 24-23 18q9 24 9 46t-9 46l23 18-18 24-24-13q-14 15-30 25t-42 15l-2 27h-28Zm13.79-54Q744-208 770-233.79t26-62Q796-332 770.21-358t-62-26Q672-384 646-358.21t-26 62Q620-260 645.79-234t62 26ZM466-452q-11 0-19.5-8.5T438-480q0-11 8.5-19.5T466-508q11 0 19.5 8.5T494-480q0 11-8.5 19.5T466-452ZM306-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferencesW100.displayName = 'OnesyIconMaterialRoomPreferencesW100';

export default IconMaterialRoomPreferencesW100;
