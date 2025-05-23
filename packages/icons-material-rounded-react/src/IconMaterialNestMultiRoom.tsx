import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestMultiRoom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoom'

      short_name='NestMultiRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h280v-120H240v120Zm360 0h120v-120H600v120ZM240-400h120v-119H240v119Zm200 0h280v-119H440v119ZM292-599h376L480-740 292-599Zm-52 479q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4q13 0 25 4t23 12l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240Z"/>
    </Icon>
  );
});

IconMaterialNestMultiRoom.displayName = 'OnesyIconMaterialNestMultiRoom';

export default IconMaterialNestMultiRoom;
