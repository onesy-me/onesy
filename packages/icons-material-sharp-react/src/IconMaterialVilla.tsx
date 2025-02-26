import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVilla = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Villa'

      short_name='Villa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-520l520-200v360h40q0-33 23.5-56.5T760-560q33 0 56.5 23.5T840-480v360H120Zm80-80h160v-280h200v-244L200-585v385Zm240 0h120v-120h80v120h120v-200H440v200ZM280-560Zm320 360Zm0-20Z"/>
    </Icon>
  );
});

IconMaterialVilla.displayName = 'OnesyIconMaterialVilla';

export default IconMaterialVilla;
