import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIceSkating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkating'

      short_name='IceSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h120v-80h-40q-33 0-56.5-23.5T120-320v-440q0-33 23.5-56.5T200-840h200q33 0 56.5 23.5T480-760v100q0 27 16.5 49t42.5 29l105 29q51 14 83.5 56.5T760-400v80q0 33-23.5 56.5T680-240h-40v80h80q50 0 85-35t35-85q0-17 11.5-28.5T880-320q17 0 28.5 11.5T920-280q0 83-58.5 141.5T720-80H120Zm80-240h480v-80q0-27-16.5-47.5T621-476l-105-30q-36-11-63-35.5T412-600h-72q-8 0-14-6t-6-14q0-8 6-14t14-6h64q-2-12-2.5-20t-1.5-20h-60q-8 0-14-6t-6-14q0-8 6-14t14-6h60v-40H200v440Zm120 160h240v-80H320v80ZM200-320Z"/>
    </Icon>
  );
});

IconMaterialIceSkating.displayName = 'OnesyIconMaterialIceSkating';

export default IconMaterialIceSkating;
