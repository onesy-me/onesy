import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOn'

      short_name='FlashlightOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160v-360l-67-100q-7-10-10-21t-3-23v-136q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v136q0 12-3 23t-10 21l-67 100v360q0 33-23.5 56.5T560-80H400q-33 0-56.5-23.5T320-160Zm160-180q-25 0-42.5-17.5T420-400q0-25 17.5-42.5T480-460q25 0 42.5 17.5T540-400q0 25-17.5 42.5T480-340ZM320-760h320v-40H320v40Zm320 80H320v16l80 120v384h160v-384l80-120v-16ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOn.displayName = 'OnesyIconMaterialFlashlightOn';

export default IconMaterialFlashlightOn;
