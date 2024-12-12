import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesFoldW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldW100Filled'

      short_name='DevicesFold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-172v-625l222-100v109h186v616H420Zm35-28h345v-560H642v476l-187 84ZM132-748v-40h40v40h-40Zm0 576v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144-144v-40h40v40h-40Zm0 576v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldW100Filled.displayName = 'OnesyIconMaterialDevicesFoldW100Filled';

export default IconMaterialDevicesFoldW100Filled;
