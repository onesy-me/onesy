import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarpenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterW100'

      short_name='Carpenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M562-88 431-220l53-55-326-466 122-122 529 529L562-88Zm-59-207 154-152-377-377-86 86 309 443Zm60 167 206-206-93-94-207 207 94 93Zm-60-167 154-152-154 152Z"/>
    </Icon>
  );
});

IconMaterialCarpenterW100.displayName = 'OnesyIconMaterialCarpenterW100';

export default IconMaterialCarpenterW100;
