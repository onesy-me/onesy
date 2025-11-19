import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageHeaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageHeaderW100Filled'

      short_name='PageHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-760v-28h616v28H172Zm0 588v-488h616v488H172Z"/>
    </Icon>
  );
});

IconMaterialPageHeaderW100Filled.displayName = 'OnesyIconMaterialPageHeaderW100Filled';

export default IconMaterialPageHeaderW100Filled;
