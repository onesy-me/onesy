import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery5Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery5Bar'

      short_name='Battery5Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-480h240v-160H360v160Z"/>
    </Icon>
  );
});

IconMaterialBattery5Bar.displayName = 'OnesyIconMaterialBattery5Bar';

export default IconMaterialBattery5Bar;
