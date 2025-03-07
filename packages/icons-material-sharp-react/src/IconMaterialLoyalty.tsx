import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoyalty = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Loyalty'

      short_name='Loyalty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M513-47 80-480v-400h400l432 434L513-47Zm0-113 286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Zm40 220 140-140q11-11 17.5-26t6.5-32q0-34-24-58t-58-24q-19 0-37.5 11T520-492q-30-28-47-38t-35-10q-34 0-58 24t-24 58q0 17 6.5 32t17.5 26l140 140Z"/>
    </Icon>
  );
});

IconMaterialLoyalty.displayName = 'OnesyIconMaterialLoyalty';

export default IconMaterialLoyalty;
