import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolyline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Polyline'

      short_name='Polyline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-720h80v-80h-80v80ZM200-400h80v-80h-80v80Zm480 240h80v-80h-80v80ZM520-760ZM240-440Zm480 240Zm-120 40v-20L320-320H200q-33 0-56.5-23.5T120-400v-80q0-33 23.5-56.5T200-560h92l108-124v-116q0-33 23.5-56.5T480-880h80q33 0 56.5 23.5T640-800v80q0 33-23.5 56.5T560-640h-92L360-516v126l245 122q8-23 28.5-37.5T680-320h80q33 0 56.5 23.5T840-240v80q0 33-23.5 56.5T760-80h-80q-33 0-56.5-23.5T600-160Z"/>
    </Icon>
  );
});

IconMaterialPolyline.displayName = 'OnesyIconMaterialPolyline';

export default IconMaterialPolyline;
