import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountTreeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeW100Filled'

      short_name='AccountTree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M626-146v-120H466v-400H334v120H106v-268h228v120h292v-120h228v268H626v-120H494v372h132v-120h228v268H626Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeW100Filled.displayName = 'OnesyIconMaterialAccountTreeW100Filled';

export default IconMaterialAccountTreeW100Filled;
