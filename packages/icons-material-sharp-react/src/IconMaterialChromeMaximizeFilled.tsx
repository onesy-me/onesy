import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeMaximizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMaximizeFilled'

      short_name='ChromeMaximize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896V256h640v640H160Z"/>
    </Icon>
  );
});

IconMaterialChromeMaximizeFilled.displayName = 'OnesyIconMaterialChromeMaximizeFilled';

export default IconMaterialChromeMaximizeFilled;
