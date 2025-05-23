import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVapeFreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapeFreeW100'

      short_name='VapeFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-220q-39-9-65.5-12t-54.5-3h-32v-50h32q28 0 54.5-3t65.5-12v80ZM828-92 700-220H352v-80h268L92-828l20-20 736 736-20 20Zm-8-161-47-47h47v47Zm-400 13q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm372-120v-90q0-66-46-106t-114-40v-28q31 0 51.5-21.5T704-696q0-31-20.5-53.5T632-772v-28q44 0 72 31t28 73q0 28-11.5 48.5T690-616q51 14 90.5 56.5T820-450v90h-28Zm-68 0v-52q0-37-24.5-59.5T646-494h-67l-97-97v-9q0-43 30.5-70.5T584-698v28q-30 0-52 20t-22 50q0 30 22 54t52 24h62q47 0 76.5 33.5T752-412v52h-28Z"/>
    </Icon>
  );
});

IconMaterialVapeFreeW100.displayName = 'OnesyIconMaterialVapeFreeW100';

export default IconMaterialVapeFreeW100;
