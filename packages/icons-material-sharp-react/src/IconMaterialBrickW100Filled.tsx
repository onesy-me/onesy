import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrickW100Filled'

      short_name='Brick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-391h111v-145h177v145h120v-145h177v145h111v391H132Z"/>
    </Icon>
  );
});

IconMaterialBrickW100Filled.displayName = 'OnesyIconMaterialBrickW100Filled';

export default IconMaterialBrickW100Filled;
