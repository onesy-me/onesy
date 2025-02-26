import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRememberMeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeFilled'

      short_name='RememberMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v880H200Zm280-360q54 0 104.5 12.5T680-352v-368H280v368q45-23 95.5-35.5T480-400Zm0-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialRememberMeFilled.displayName = 'OnesyIconMaterialRememberMeFilled';

export default IconMaterialRememberMeFilled;
