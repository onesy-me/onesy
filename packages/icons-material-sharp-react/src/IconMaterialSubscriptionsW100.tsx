import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubscriptionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsW100'

      short_name='Subscriptions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-456h696v456H132Zm28-28h640v-400H160v400Zm266-88 168-112-168-112v224ZM186-668v-28h588v28H186Zm120-108v-28h348v28H306ZM160-160v-400 400Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsW100.displayName = 'OnesyIconMaterialSubscriptionsW100';

export default IconMaterialSubscriptionsW100;
