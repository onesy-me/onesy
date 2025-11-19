import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileChargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileChargeFilled'

      short_name='MobileCharge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m460-280 120-240h-80v-160L380-440h80v160ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
});

IconMaterialMobileChargeFilled.displayName = 'OnesyIconMaterialMobileChargeFilled';

export default IconMaterialMobileChargeFilled;
