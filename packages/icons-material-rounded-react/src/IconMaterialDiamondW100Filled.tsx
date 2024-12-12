import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondW100Filled'

      short_name='Diamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M359-614h242L501-814h-42L359-614Zm107 436v-408H126l340 408Zm28 0 340-408H494v408Zm138-436h212l-83-167q-8.37-15-22.44-24-14.07-9-31.56-9H532l100 200Zm-516 0h212l100-200H253q-17.49 0-31.56 9T199-781l-83 167Z"/>
    </Icon>
  );
});

IconMaterialDiamondW100Filled.displayName = 'OnesyIconMaterialDiamondW100Filled';

export default IconMaterialDiamondW100Filled;
