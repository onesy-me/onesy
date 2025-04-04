import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopMacFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMacFilled'

      short_name='LaptopMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacFilled.displayName = 'OnesyIconMaterialLaptopMacFilled';

export default IconMaterialLaptopMacFilled;
