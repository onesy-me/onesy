import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShortStay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStay'

      short_name='ShortStay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h360q33 0 56.5 23.5T640-800v200q0 17-11.5 28.5T600-560q-17 0-28.5-11.5T560-600v-200H200v261q18-11 38-16t42-5h160q17 0 28.5 11.5T480-520q0 17-11.5 28.5T440-480H280q-33 0-56.5 23.5T200-400v240h200q17 0 28.5 11.5T440-120q0 17-11.5 28.5T400-80H200Zm180-520q-33 0-56.5-23.5T300-680q0-33 23.5-56.5T380-760q33 0 56.5 23.5T460-680q0 33-23.5 56.5T380-600Zm-40 320v40q0 17 11.5 28.5T380-200q8 0 15.5-3t12.5-8q-4-17-6-34t-2-35q0-27 5-53t15-51v-16q0-17-11.5-28.5T380-440q-17 0-28.5 11.5T340-400v40h-40q-17 0-28.5 11.5T260-320q0 17 11.5 28.5T300-280h40ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm20-208v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v100q0 2 6 14l67 67q6 6 14 6t14-6q6-6 6-14t-6-14l-61-61ZM280-160h147-227 80Z"/>
    </Icon>
  );
});

IconMaterialShortStay.displayName = 'OnesyIconMaterialShortStay';

export default IconMaterialShortStay;
