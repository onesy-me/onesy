import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatW100Filled'

      short_name='Nat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M175-386q-39 0-66.5-27.5T81-480q0-39 27.5-66.5T175-574q35 0 61.5 22.5T269-494h152v28H269q-6 35-32.5 57.5T175-386Zm0-28q27 0 46.5-19.5T241-480q0-27-19.5-46.5T175-546q-27 0-46.5 19.5T109-480q0 27 19.5 46.5T175-414Zm46 282v-28q136 0 228-90.5T541-480q0-139-92-229.5T221-800v-28q149 0 247 98.5T569-494h256l-90-90 20-20 124 124-124 124-20-20 90-90H569q-3 137-101 235.5T221-132Z"/>
    </Icon>
  );
});

IconMaterialNatW100Filled.displayName = 'OnesyIconMaterialNatW100Filled';

export default IconMaterialNatW100Filled;
