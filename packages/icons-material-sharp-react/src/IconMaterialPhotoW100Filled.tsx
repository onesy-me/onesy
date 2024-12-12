import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoW100Filled'

      short_name='Photo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-306h332L548-442 448-318l-64-74-66 86ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialPhotoW100Filled.displayName = 'OnesyIconMaterialPhotoW100Filled';

export default IconMaterialPhotoW100Filled;
