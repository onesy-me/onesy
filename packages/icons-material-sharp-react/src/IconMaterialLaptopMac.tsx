import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopMac = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMac'

      short_name='LaptopMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-160v-80h120l-40-40v-560h800v560l-40 40h120v80H0Zm480-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200ZM160-320h640v-440H160v440Zm0 0v-440 440Z"/>
    </Icon>
  );
});

IconMaterialLaptopMac.displayName = 'OnesyIconMaterialLaptopMac';

export default IconMaterialLaptopMac;
