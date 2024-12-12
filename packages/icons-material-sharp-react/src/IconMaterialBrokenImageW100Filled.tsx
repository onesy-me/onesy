import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrokenImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageW100Filled'

      short_name='BrokenImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-276l68 68 160-160 160 160 160-160 68 68v300H172Zm0-616h616v276l-68-68-160 160-160-160-160 160-68-68v-300Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageW100Filled.displayName = 'OnesyIconMaterialBrokenImageW100Filled';

export default IconMaterialBrokenImageW100Filled;
