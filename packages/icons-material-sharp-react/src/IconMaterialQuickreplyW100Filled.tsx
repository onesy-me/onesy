import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickreplyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyW100Filled'

      short_name='Quickreply'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M756-156v-136h-40v-168h85l-38 120h65l-72 184Zm-624-24v-648h696v248H596v288H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyW100Filled.displayName = 'OnesyIconMaterialQuickreplyW100Filled';

export default IconMaterialQuickreplyW100Filled;
