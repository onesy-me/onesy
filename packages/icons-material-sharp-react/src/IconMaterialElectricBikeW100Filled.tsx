import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricBikeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBikeW100Filled'

      short_name='ElectricBike'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-306q-74 0-124-50T26-480q0-72 51-124t123-52q66 0 117 46.5T374-494h84l-90-252h-62v-28h148v28h-56l32 90h250l-77-210h-97v-28h117l87 238h50q72 0 123 51t51 123q0 72-51 123t-123 51q-68 0-117-45.5T586-466H374q-6 69-57.5 114.5T200-306Zm26-160h120v-28H226v28ZM512-58l-194-98h128v-66l194 98H512v66Zm-22-436h96q3-29 22.5-71.5T666-628H440l50 134Zm246-6 26-10-42-112-24 10 40 112Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeW100Filled.displayName = 'OnesyIconMaterialElectricBikeW100Filled';

export default IconMaterialElectricBikeW100Filled;
