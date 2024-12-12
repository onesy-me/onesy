import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledata'

      short_name='HMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-400h80v160h240v-160h80v400h-80v-160H360v160h-80Z"/>
    </Icon>
  );
});

IconMaterialHMobiledata.displayName = 'OnesyIconMaterialHMobiledata';

export default IconMaterialHMobiledata;
