import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubscriptionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsW100Filled'

      short_name='Subscriptions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-456h696v456H132Zm294-116 168-112-168-112v224ZM186-668v-28h588v28H186Zm120-108v-28h348v28H306Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsW100Filled.displayName = 'OnesyIconMaterialSubscriptionsW100Filled';

export default IconMaterialSubscriptionsW100Filled;
