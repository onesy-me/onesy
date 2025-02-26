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
      <path d="M320-80v-440l-80-120v-240h480v240l-80 120v440H320Zm160-260q-25 0-42.5-17.5T420-400q0-25 17.5-42.5T480-460q25 0 42.5 17.5T540-400q0 25-17.5 42.5T480-340ZM320-760h320v-40H320v40Zm320 80H320v16l80 120v384h160v-384l80-120v-16ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOn.displayName = 'OnesyIconMaterialFlashlightOn';

export default IconMaterialFlashlightOn;
