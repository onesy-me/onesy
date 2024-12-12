import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryAddCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckW100Filled'

      short_name='LibraryAddCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m482-436 190-190-20-20-170 170-86-86-20 20 106 106ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheckW100Filled.displayName = 'OnesyIconMaterialLibraryAddCheckW100Filled';

export default IconMaterialLibraryAddCheckW100Filled;
