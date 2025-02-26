import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop169 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169'

      short_name='Crop169'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280q-33 0-56.5-23.5T120-360v-240q0-33 23.5-56.5T200-680h560q33 0 56.5 23.5T840-600v240q0 33-23.5 56.5T760-280H200Zm0-80h560v-240H200v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialCrop169.displayName = 'OnesyIconMaterialCrop169';

export default IconMaterialCrop169;
