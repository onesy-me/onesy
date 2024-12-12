import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinimizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeFilled'

      short_name='Minimize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80h480v80H240Z"/>
    </Icon>
  );
});

IconMaterialMinimizeFilled.displayName = 'OnesyIconMaterialMinimizeFilled';

export default IconMaterialMinimizeFilled;
