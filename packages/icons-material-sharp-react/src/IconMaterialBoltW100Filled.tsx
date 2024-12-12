import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltW100Filled'

      short_name='Bolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m380-138 40-274H259l281-405-39 309h188L380-138Z"/>
    </Icon>
  );
});

IconMaterialBoltW100Filled.displayName = 'OnesyIconMaterialBoltW100Filled';

export default IconMaterialBoltW100Filled;
