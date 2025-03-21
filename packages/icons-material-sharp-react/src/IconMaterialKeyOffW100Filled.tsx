import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffW100Filled'

      short_name='KeyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 494-426h-46q-11 47-56.5 83.5T280-306q-74 0-124-50t-50-124q0-72 47-120.5T266-654L126-794l20-20 668 668-20 20Zm24-408 54 54-88 89-63-48-51 36-76-76-55-55h279ZM280-420q25 0 42.5-17.5T340-480q0-12-4.5-23t-13-19.5q-8.5-8.5-19.5-13t-23-4.5q-25 0-42.5 17.5T220-480q0 25 17.5 42.5T280-420Z"/>
    </Icon>
  );
});

IconMaterialKeyOffW100Filled.displayName = 'OnesyIconMaterialKeyOffW100Filled';

export default IconMaterialKeyOffW100Filled;
