import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery60W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery60W100'

      short_name='Battery60'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Z"/>
    </Icon>
  );
});

IconMaterialBattery60W100.displayName = 'OnesyIconMaterialBattery60W100';

export default IconMaterialBattery60W100;
