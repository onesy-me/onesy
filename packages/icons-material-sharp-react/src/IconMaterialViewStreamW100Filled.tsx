import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewStreamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamW100Filled'

      short_name='ViewStream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-214h616v214H172Zm0-242v-214h616v214H172Z"/>
    </Icon>
  );
});

IconMaterialViewStreamW100Filled.displayName = 'OnesyIconMaterialViewStreamW100Filled';

export default IconMaterialViewStreamW100Filled;
