import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestMultiRoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoomW100'

      short_name='NestMultiRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h306v-159H240v159Zm334 0h146v-159H574v159ZM240-387h146v-159H240v159Zm174 0h306v-159H414v159ZM257-573h446L480-740 257-573Zm15 401q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q8.3-6 17.34-9 9.05-3 18.86-3 9.8 0 18.71 3 8.92 3 17.09 9l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272Z"/>
    </Icon>
  );
});

IconMaterialNestMultiRoomW100.displayName = 'OnesyIconMaterialNestMultiRoomW100';

export default IconMaterialNestMultiRoomW100;
