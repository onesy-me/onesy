import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarpenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterW100Filled'

      short_name='Carpenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M605-131q-9 9-20.5 13.5T562-113q-11 0-22-4.5T520-131l-48-47q-9-9-13-20t-4-22q0-11 4.5-22t12.5-20l12-13-326-466 122-122 486 486q9 9 13.5 20.5T784-334q0 11-4.5 22T766-292L605-131Zm-64-20q10 9 23 9t22-9l160-160q9-9 9-22t-9-23l-70-72-184 184q-10 10-10 23.5t10 22.5l49 47Z"/>
    </Icon>
  );
});

IconMaterialCarpenterW100Filled.displayName = 'OnesyIconMaterialCarpenterW100Filled';

export default IconMaterialCarpenterW100Filled;
