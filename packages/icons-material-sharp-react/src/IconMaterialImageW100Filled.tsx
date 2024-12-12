import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageW100Filled'

      short_name='Image'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-306h332L548-442 448-318l-64-74-66 86ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialImageW100Filled.displayName = 'OnesyIconMaterialImageW100Filled';

export default IconMaterialImageW100Filled;
