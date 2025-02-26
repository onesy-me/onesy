import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoneyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyW100'

      short_name='Money'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M574-346h146v-268H574v268Zm28-28v-212h90v212h-90Zm-254 28h146v-268H348v268Zm28-28v-212h90v212h-90Zm-136 28h28v-268h-28v268ZM132-212v-536h696v536H132Zm28-508v480-480Zm0 480h640v-480H160v480Z"/>
    </Icon>
  );
});

IconMaterialMoneyW100.displayName = 'OnesyIconMaterialMoneyW100';

export default IconMaterialMoneyW100;
