import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLocationAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltFilled'

      short_name='AddLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0-400q20 0 40 2.5t40 7.5v70q0 33 23.5 56.5T640-720h40v40q0 33 23.5 56.5T760-600h37q2 11 2.5 23.5t.5 24.5q0 66-30.5 131t-73 122q-42.5 57-88 101.5T533-127q-11 10-25 15t-28 5q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880Zm240 120h-80q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h80v-80q0-17 11.5-28.5T760-960q17 0 28.5 11.5T800-920v80h80q17 0 28.5 11.5T920-800q0 17-11.5 28.5T880-760h-80v80q0 17-11.5 28.5T760-640q-17 0-28.5-11.5T720-680v-80Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltFilled.displayName = 'OnesyIconMaterialAddLocationAltFilled';

export default IconMaterialAddLocationAltFilled;
