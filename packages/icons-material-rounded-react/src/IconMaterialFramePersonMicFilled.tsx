import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFramePersonMicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonMicFilled'

      short_name='FramePersonMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480q-51 0-85.5-34.5T320-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T440-480Zm220 140q28 0 49-17t28-43q2-8 8.5-14t14.5-6q8 0 14 6t4 14q-7 38-33.5 65T680-302v42q0 8-6 14t-14 6q-8 0-14-6t-6-14v-42q-38-6-64.5-33T542-400q-2-8 4-14t14-6q8 0 14.5 6t8.5 14q7 26 28 43t49 17Zm0-40q-21 0-35.5-14.5T610-430v-80q0-21 14.5-35.5T660-560q21 0 35.5 14.5T710-510v80q0 21-14.5 35.5T660-380ZM160-80q-33 0-56.5-23.5T80-160v-120q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280v120h120q17 0 28.5 11.5T320-120q0 17-11.5 28.5T280-80H160ZM80-680v-120q0-33 23.5-56.5T160-880h120q17 0 28.5 11.5T320-840q0 17-11.5 28.5T280-800H160v120q0 17-11.5 28.5T120-640q-17 0-28.5-11.5T80-680ZM800-80H680q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h120v-120q0-17 11.5-28.5T840-320q17 0 28.5 11.5T880-280v120q0 33-23.5 56.5T800-80Zm0-600v-120H680q-17 0-28.5-11.5T640-840q0-17 11.5-28.5T680-880h120q33 0 56.5 23.5T880-800v120q0 17-11.5 28.5T840-640q-17 0-28.5-11.5T800-680ZM240-240q-17 0-28.5-11.5T200-280v-36q0-21 10.5-39.5T239-385q42-25 88.5-39t94.5-16q17-1 28 12t10 30q0 29 9 57.5t26 53.5q11 15 4 31t-24 16H240Z"/>
    </Icon>
  );
});

IconMaterialFramePersonMicFilled.displayName = 'OnesyIconMaterialFramePersonMicFilled';

export default IconMaterialFramePersonMicFilled;
