import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseW100'

      short_name='Close'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/>
    </Icon>
  );
});

IconMaterialCloseW100.displayName = 'OnesyIconMaterialCloseW100';

export default IconMaterialCloseW100;
