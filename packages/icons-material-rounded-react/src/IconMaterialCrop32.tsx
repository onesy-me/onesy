import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop32 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32'

      short_name='Crop32'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-240q-33 0-56.5-23.5T120-320v-320q0-33 23.5-56.5T200-720h560q33 0 56.5 23.5T840-640v320q0 33-23.5 56.5T760-240H200Zm0-80h560v-320H200v320Zm0 0v-320 320Z"/>
    </Icon>
  );
});

IconMaterialCrop32.displayName = 'OnesyIconMaterialCrop32';

export default IconMaterialCrop32;
