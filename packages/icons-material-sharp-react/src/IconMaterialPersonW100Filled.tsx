import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonW100Filled'

      short_name='Person'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-512q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512ZM212-232v-52q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q54 0 108.5 13T698-356q23 11 36.5 30.5T748-284v52H212Z"/>
    </Icon>
  );
});

IconMaterialPersonW100Filled.displayName = 'OnesyIconMaterialPersonW100Filled';

export default IconMaterialPersonW100Filled;
