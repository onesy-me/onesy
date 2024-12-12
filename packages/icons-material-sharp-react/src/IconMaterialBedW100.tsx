import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedW100'

      short_name='Bed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-252v-256h40v-148h616v148h40v256h-28v-80H160v80h-28Zm362-256h266v-120H494v120Zm-294 0h266v-120H200v120Zm-40 148h640v-120H160v120Zm640 0H160h640Z"/>
    </Icon>
  );
});

IconMaterialBedW100.displayName = 'OnesyIconMaterialBedW100';

export default IconMaterialBedW100;
