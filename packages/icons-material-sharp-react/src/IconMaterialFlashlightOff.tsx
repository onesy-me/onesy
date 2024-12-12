import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOff'

      short_name='FlashlightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M792-56 640-208v128H320v-448L56-792l56-56 736 736-56 56ZM400-160h160v-128L400-448v288Zm240-274-80-80v-30l80-120v-16H394l-80-80h326v-40H274l-34-34v-46h480v240l-80 120v86Zm-160 66Zm17-209Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOff.displayName = 'OnesyIconMaterialFlashlightOff';

export default IconMaterialFlashlightOff;
