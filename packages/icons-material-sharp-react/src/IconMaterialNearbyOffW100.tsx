import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearbyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffW100'

      short_name='NearbyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m693-355-26-26 100-100-288-288-101 101-26-26 127-127 340 340-126 126ZM479-141 139-481l138-138-156-156 20-20 650 650-20 20-154-154-138 138Zm0-52 112-112-79-79-33 33-130-130 33-33-79-79-112 112 288 288Zm109-267L458-590l20-20 130 130-20 20Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffW100.displayName = 'OnesyIconMaterialNearbyOffW100';

export default IconMaterialNearbyOffW100;
