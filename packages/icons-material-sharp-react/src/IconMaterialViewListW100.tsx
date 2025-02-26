import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListW100'

      short_name='ViewList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M334-240h466v-133H334v133ZM160-587h146v-133H160v133Zm0 187h146v-159H160v159Zm0 160h146v-133H160v133Zm174-160h466v-159H334v159Zm0-187h466v-133H334v133ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialViewListW100.displayName = 'OnesyIconMaterialViewListW100';

export default IconMaterialViewListW100;
