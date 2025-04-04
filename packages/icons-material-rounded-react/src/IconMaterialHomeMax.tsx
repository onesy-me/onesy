import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMax = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMax'

      short_name='HomeMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280h560q33 0 56.5-23.5T840-360v-240q0-33-23.5-56.5T760-680H200q-33 0-56.5 23.5T120-600v240q0 33 23.5 56.5T200-280Zm80 80h-80q-66 0-113-47T40-360v-240q0-66 47-113t113-47h560q66 0 113 47t47 113v240q0 66-47 113t-113 47h-80q0 17-11.5 28.5T640-160H320q-17 0-28.5-11.5T280-200Zm200-280Z"/>
    </Icon>
  );
});

IconMaterialHomeMax.displayName = 'OnesyIconMaterialHomeMax';

export default IconMaterialHomeMax;
