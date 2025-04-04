import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRedeem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Redeem'

      short_name='Redeem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v80h640v-80H160ZM80-720h168q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q30 0 55.5 15.5T460-826l20 26 20-26q18-24 44-39t56-15q50 0 85 35t35 85q0 11-1.5 21t-6.5 19h168v600H80v-600Zm80 320h640v-240H596l84 114-64 46-136-184-136 184-64-46 82-114H160v240Zm200-320q17 0 28.5-11.5T400-760q0-17-11.5-28.5T360-800q-17 0-28.5 11.5T320-760q0 17 11.5 28.5T360-720Zm240 0q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Z"/>
    </Icon>
  );
});

IconMaterialRedeem.displayName = 'OnesyIconMaterialRedeem';

export default IconMaterialRedeem;
