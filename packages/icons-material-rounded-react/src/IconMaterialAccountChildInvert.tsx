import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountChildInvert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountChildInvert'

      short_name='AccountChildInvert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-880q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-50 35-85t85-35Zm0 280q47 0 93 11t83 31q38 19 61 45t23 57v232q0 32-18.5 57T673-142q-15 0-26-11.5T636-186v-16q0-38-52.5-62T480-288q-39 0-77 12.5T343-241q-8 8-4 20.5t17 16.5q32 9 64.5 13t67.5 5q22 0 37.5 15.5T541-133q0 22-15.5 37.5T488-80q-35 0-81-8t-88-25q-42-17-70.5-44.5T220-224v-232q0-31 23-57t60-45q38-20 84-31t93-11Zm0 240q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Z"/>
    </Icon>
  );
});

IconMaterialAccountChildInvert.displayName = 'OnesyIconMaterialAccountChildInvert';

export default IconMaterialAccountChildInvert;
