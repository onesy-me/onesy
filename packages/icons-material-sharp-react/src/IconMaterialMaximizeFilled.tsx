import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMaximizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeFilled'

      short_name='Maximize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialMaximizeFilled.displayName = 'OnesyIconMaterialMaximizeFilled';

export default IconMaterialMaximizeFilled;
