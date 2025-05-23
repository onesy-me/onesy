import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlender = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Blender'

      short_name='Blender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-33 0-56.5-23.5T240-160v-40q0-47 20.5-87t53.5-67l-25-166h-89q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h200q11-11 17.5-25.5T440-880h80q16 0 22.5 14.5T560-840h112q18 0 30.5 14t9.5 32l-66 440q33 27 53.5 67t20.5 87v40q0 33-23.5 56.5T640-80H320Zm-43-520-24-160h-53v160h77Zm203 400q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm-92-200h184l54-360H334l54 360Zm-68 240h320v-40q0-50-35-85t-85-35h-80q-50 0-85 35t-35 85v40Zm160-80Z"/>
    </Icon>
  );
});

IconMaterialBlender.displayName = 'OnesyIconMaterialBlender';

export default IconMaterialBlender;
