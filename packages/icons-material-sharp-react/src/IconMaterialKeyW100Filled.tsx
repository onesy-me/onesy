import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyW100Filled'

      short_name='Key'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-420q25 0 42.5-17.5T340-480q0-25-17.5-42.5T280-540q-25 0-42.5 17.5T220-480q0 25 17.5 42.5T280-420Zm0 114q-74 0-124-50t-50-124q0-74 50-124t124-50q64 0 110.5 36t57.5 84h370l54 54-87 89-65-48-71 51-57-38H448q-11 48-57.5 84T280-306Z"/>
    </Icon>
  );
});

IconMaterialKeyW100Filled.displayName = 'OnesyIconMaterialKeyW100Filled';

export default IconMaterialKeyW100Filled;
