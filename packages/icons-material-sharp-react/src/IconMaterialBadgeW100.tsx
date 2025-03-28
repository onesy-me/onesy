import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeW100'

      short_name='Badge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-270h208v-2q0-12.59-6.86-23.33Q450.28-306.07 438-312q-19.02-8-38.51-12T360-328q-20 0-39.49 4-19.49 4-38.51 12-12.28 5.93-19.14 16.67Q256-284.59 256-272v2Zm304-62h160v-28H560v28Zm-200.24-28Q378-360 391-372.76q13-12.77 13-31Q404-422 391.24-435q-12.77-13-31-13Q342-448 329-435.24q-13 12.77-13 31Q316-386 328.76-373q12.77 13 31 13ZM560-420h160v-28H560v28ZM132-132v-496h280v-200h136v200h280v496H132Zm28-28h640v-440H548v68H412v-68H160v440Zm280-400h80v-240h-80v240Zm40 180Z"/>
    </Icon>
  );
});

IconMaterialBadgeW100.displayName = 'OnesyIconMaterialBadgeW100';

export default IconMaterialBadgeW100;
