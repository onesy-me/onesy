import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightMaxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightMaxW100'

      short_name='NightSightMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-546v-120H586v-28h120v-120h28v120h120v28H734v120h-28ZM440-174q72 0 130-35t100-98q-143 3-233.5-80T346-600q0-23 3.5-46.5T361-695q-85 29-136 98t-51 157q0 110 78 188t188 78Zm0 28q-123.11 0-208.56-85.44Q146-316.89 146-440q0-112 74.5-196.5T409-732q-17 26-26 62t-9 70q0 110 78 188t188 78q20 0 39.5-3t38.5-9q-29 88-104.5 144T440-146Zm-3-242Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxW100.displayName = 'OnesyIconMaterialNightSightMaxW100';

export default IconMaterialNightSightMaxW100;
