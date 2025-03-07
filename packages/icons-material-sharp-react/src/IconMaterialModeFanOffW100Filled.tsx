import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeFanOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanOffW100Filled'

      short_name='ModeFanOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M818-464q0 48-23 77t-63 29q-17 0-41-10t-36-21L360-680q-11-73 50-105.5T530-818q32 0 52 18.5t20 47.5q0 20-8.5 37T570-687q-22 14-38 41.5T508-581q14 5 24 10.5t18 13.5l94-35q14-5 26-7.5t25-2.5q54 0 88.5 38.5T818-464Zm1 396L600-288q2 5 2 10v10q0 55-46.5 90.5T434-142q-32 0-54-19.5T358-210q0-20 8.5-37t23.5-27q23-15 38.5-42.5T452-379q-13-5-23-10.5T410-403l-94 34q-14 5-26.5 8t-25.5 3q-60 0-91-40.5T142-496q0-52 24-79t65-27q22 0 49.5 11t41.5 25L57-830l20-20L839-88l-20 20Z"/>
    </Icon>
  );
});

IconMaterialModeFanOffW100Filled.displayName = 'OnesyIconMaterialModeFanOffW100Filled';

export default IconMaterialModeFanOffW100Filled;
