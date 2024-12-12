import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesFoldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldW100'

      short_name='DevicesFold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-172v-625l222-100v109h186v616H420Zm28-55 166-75v-551l-166 73v553Zm7 27h345v-560H642v476l-187 84Zm-7-27v-553 553ZM132-748v-40h40v40h-40Zm0 576v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144-144v-40h40v40h-40Zm0 576v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldW100.displayName = 'OnesyIconMaterialDevicesFoldW100';

export default IconMaterialDevicesFoldW100;
