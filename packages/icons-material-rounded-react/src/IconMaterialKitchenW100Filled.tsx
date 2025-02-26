import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKitchenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenW100Filled'

      short_name='Kitchen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M344.04-640q5.96 0 9.96-4.03 4-4.02 4-9.97v-72q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v72q0 5.95 4.04 9.97 4.03 4.03 10 4.03Zm0 314q5.96 0 9.96-4.02 4-4.03 4-9.98v-138q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v138q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM272-132q-24.75 0-42.37-17.63Q212-167.25 212-192v-360h536v360q0 25-17.62 42.5Q712.75-132 688-132H272Zm-60-448v-188q0-24.75 17.63-42.38Q247.25-828 272-828h416q24.75 0 42.38 17.62Q748-792.75 748-768v188H212Z"/>
    </Icon>
  );
});

IconMaterialKitchenW100Filled.displayName = 'OnesyIconMaterialKitchenW100Filled';

export default IconMaterialKitchenW100Filled;
