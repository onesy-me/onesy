import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoneyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyW100Filled'

      short_name='Money'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-346h118q5.95 0 9.97-4.02Q720-354.05 720-360v-240q0-5.95-4.03-9.97Q711.95-614 706-614H588q-5.95 0-9.97 4.03Q574-605.95 574-600v240q0 5.95 4.03 9.98Q582.05-346 588-346Zm14-28v-212h90v212h-90Zm-240 28h118q5.95 0 9.98-4.02Q494-354.05 494-360v-240q0-5.95-4.02-9.97Q485.95-614 480-614H362q-5.95 0-9.98 4.03Q348-605.95 348-600v240q0 5.95 4.02 9.98Q356.05-346 362-346Zm14-28v-212h90v212h-90Zm-108 14v-240q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v240q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98Zm-136 88v-416q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v416q0 24.75-17.62 42.37Q792.75-212 768-212H192q-24.75 0-42.37-17.63Q132-247.25 132-272Z"/>
    </Icon>
  );
});

IconMaterialMoneyW100Filled.displayName = 'OnesyIconMaterialMoneyW100Filled';

export default IconMaterialMoneyW100Filled;
