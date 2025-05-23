import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvTimerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvTimerW100'

      short_name='AvTimer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-63.53 0-119.77-24Q304-220 262-262q-42-42-66-98.23-24-56.24-24-119.77 0-37 8-70.5t22-63.5q14-30 34-55.5t44-46.5l236 236-20 20-216-216q-32 35-56 82.5T200-480q0 116 82 198t198 82q116 0 198-82t82-198q0-104-71-186.5T494-760v80h-28v-108h14q63.53 0 119.77 24Q656-740 698-698q42 42 66 98.23 24 56.24 24 119.77 0 63.53-24 119.77Q740-304 698-262q-42 42-98.23 66-56.24 24-119.77 24ZM279.93-452Q268-452 260-460.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm200 200Q468-252 460-260.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm200-200Q668-452 660-460.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Z"/>
    </Icon>
  );
});

IconMaterialAvTimerW100.displayName = 'OnesyIconMaterialAvTimerW100';

export default IconMaterialAvTimerW100;
