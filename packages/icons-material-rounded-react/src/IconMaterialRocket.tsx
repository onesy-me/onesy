import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocket = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rocket'

      short_name='Rocket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M319-230q-10-29-18.5-59T287-349l-47 32v119l79-32Zm147-535q-48 51-77 134.5T360-455q0 60 11 117.5t29 97.5h160q18-40 29-97.5T600-455q0-92-29-175.5T494-765q-3-3-6.5-4.5T480-771q-4 0-7.5 1.5T466-765Zm14 325q-33 0-56.5-23.5T400-520q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520q0 33-23.5 56.5T480-440Zm161 210 79 32v-119l-47-32q-5 30-13.5 60T641-230ZM511-856q84 72 126.5 177T680-440l84 56q17 11 26.5 29t9.5 38v178q0 21-17.5 33t-37.5 4l-144-58H359l-144 58q-20 8-37.5-4T160-139v-178q0-20 9.5-38t26.5-29l84-56q0-134 42.5-239T449-856q7-5 15-8t16-3q8 0 16 3t15 8Z"/>
    </Icon>
  );
});

IconMaterialRocket.displayName = 'OnesyIconMaterialRocket';

export default IconMaterialRocket;
