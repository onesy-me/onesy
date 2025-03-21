import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothDriveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDriveW100Filled'

      short_name='BluetoothDrive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M234.24-336q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm368 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM110-172v-300l83-236h385v28H214l-64 180h428v28h148v300h-28v-80H138v80h-28Zm620-354v-160l-98 98-20-20 112-112-112-112 20-20 98 98v-160h12l108 108-86 86 86 86-108 108h-12Zm28-228 52-52-52-52v104Zm0 172 52-52-52-52v104Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDriveW100Filled.displayName = 'OnesyIconMaterialBluetoothDriveW100Filled';

export default IconMaterialBluetoothDriveW100Filled;
