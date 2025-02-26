import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomRightClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomRightClickW100'

      short_name='BottomRightClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h543q14 0 23-9t9-23v-541q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v541q0 24.75-17.62 42.37Q752.75-172 728-172H185Zm415-134q-23 0-38.5-15.5T546-360q0-23 15.5-38.5T600-414q23 0 38.5 15.5T654-360q0 23-15.5 38.5T600-306ZM266-480q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h166L193-748q-4-4-4-9.5t4-9.5q4-4 9.5-4t9.5 4l240 239v-166q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v184q0 12.75-8.62 21.37Q462.75-480 450-480H266Z"/>
    </Icon>
  );
});

IconMaterialBottomRightClickW100.displayName = 'OnesyIconMaterialBottomRightClickW100';

export default IconMaterialBottomRightClickW100;
