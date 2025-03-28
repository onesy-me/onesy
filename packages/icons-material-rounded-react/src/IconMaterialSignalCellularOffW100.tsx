import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOffW100'

      short_name='SignalCellularOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560L480-440 200-160Zm4 28q-20 0-27.5-18.5T183-183l277-277-289-289q-4-4-4.5-9.5T171-769q5-5 10-5t10 5l661 661q4 4 4.5 9.5T852-88q-5 5-10 5t-10-5l-44-44H204Zm624-624v478q0 7-4.5 10.5T814-264q-5 0-9.5-3.5T800-278v-482L566-526q-4 4-9.5 4.5T546-526q-5-5-5-10t5-10l231-231q14-14 32.5-6.5T828-756ZM678-394Zm-58 94Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOffW100.displayName = 'OnesyIconMaterialSignalCellularOffW100';

export default IconMaterialSignalCellularOffW100;
