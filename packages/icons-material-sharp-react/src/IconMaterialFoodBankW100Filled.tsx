import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoodBankW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankW100Filled'

      short_name='FoodBank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M416-274h32v-128q20 0 34-14t14-34v-96h-32v96h-16v-96h-32v96h-16v-96h-32v96q0 20 14 34t34 14v128Zm128 0h32v-272q-26 0-45 18.8T512-482v96h32v112ZM212-172v-402l268-202 268 202v402H212Z"/>
    </Icon>
  );
});

IconMaterialFoodBankW100Filled.displayName = 'OnesyIconMaterialFoodBankW100Filled';

export default IconMaterialFoodBankW100Filled;
