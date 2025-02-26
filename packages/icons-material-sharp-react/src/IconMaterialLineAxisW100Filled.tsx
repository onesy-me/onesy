import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineAxisW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineAxisW100Filled'

      short_name='LineAxis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m140-240-20-20 264-264 160 160 103-119-262-242-245 245-20-20 264-264 282 260 156-180 20 18-155 181 155 143-20 20-154-142-122 142-162-162-244 244Z"/>
    </Icon>
  );
});

IconMaterialLineAxisW100Filled.displayName = 'OnesyIconMaterialLineAxisW100Filled';

export default IconMaterialLineAxisW100Filled;
