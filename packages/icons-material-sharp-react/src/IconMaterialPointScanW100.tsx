import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPointScanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointScanW100'

      short_name='PointScan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-426q-23 0-38.5-15.5T426-480q0-23 15.5-38.5T480-534q23 0 38.5 15.5T534-480q0 23-15.5 38.5T480-426Zm-14-214v-148h28v148h-28Zm0 468v-148h28v148h-28Zm174-294v-28h148v28H640Zm-468 0v-28h148v28H172Z"/>
    </Icon>
  );
});

IconMaterialPointScanW100.displayName = 'OnesyIconMaterialPointScanW100';

export default IconMaterialPointScanW100;
