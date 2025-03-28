import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchFilled'

      short_name='Switch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q17 0 28.5-11.5T640-320v-320q0-17-11.5-28.5T600-680H360q-17 0-28.5 11.5T320-640v320q0 17 11.5 28.5T360-280h240Zm-200-80v-240h160v240H400ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-360q17 0 28.5-11.5T520-520q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520q0 17 11.5 28.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialSwitchFilled.displayName = 'OnesyIconMaterialSwitchFilled';

export default IconMaterialSwitchFilled;
