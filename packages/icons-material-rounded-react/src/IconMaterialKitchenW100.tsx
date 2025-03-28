import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKitchenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenW100'

      short_name='Kitchen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M343.96-640q-5.96 0-9.96-4.03-4-4.02-4-9.97v-72q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v72q0 5.95-4.04 9.97-4.03 4.03-10 4.03Zm0 314q-5.96 0-9.96-4.02-4-4.03-4-9.98v-138q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v138q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM272-132q-24.75 0-42.37-17.63Q212-167.25 212-192v-576q0-24.75 17.63-42.38Q247.25-828 272-828h416q24.75 0 42.38 17.62Q748-792.75 748-768v576q0 24.75-17.62 42.37Q712.75-132 688-132H272Zm0-28h416q14 0 23-9t9-23v-360H240v360q0 14 9 23t23 9Zm-32-420h480v-188q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v188Z"/>
    </Icon>
  );
});

IconMaterialKitchenW100.displayName = 'OnesyIconMaterialKitchenW100';

export default IconMaterialKitchenW100;
