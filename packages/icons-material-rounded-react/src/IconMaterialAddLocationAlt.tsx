import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLocationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAlt'

      short_name='AddLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-880h20q10 0 20 2v81q-10-2-19.5-2.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q122-112 181-203.5T720-552v-8h80v8q0 66-30.5 131t-73 122q-42.5 57-88 101.5T533-127q-11 10-25 15t-28 5q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880Zm0 400q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0-80Zm240-200v80q0 17 11.5 28.5T760-640q17 0 28.5-11.5T800-680v-80h80q17 0 28.5-11.5T920-800q0-17-11.5-28.5T880-840h-80v-80q0-17-11.5-28.5T760-960q-17 0-28.5 11.5T720-920v80h-80q-17 0-28.5 11.5T600-800q0 17 11.5 28.5T640-760h80Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAlt.displayName = 'OnesyIconMaterialAddLocationAlt';

export default IconMaterialAddLocationAlt;
