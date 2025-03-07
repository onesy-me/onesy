import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoBackpackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackW100'

      short_name='NoBackpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m748-324-28-28v-267q0-41.66-31.14-71.33T614-720H351l-26-26q2 0 3.5-.5t3.5-.5v-81h68v80h160v-80h68v81q48 5 84 39.5t36 88.5v295ZM640-425l-21-21h21v21Zm-131-21v28H320v-28h189Zm21-84Zm-56 84ZM243-701l20 20q-11 11-17 28.5t-6 33.5v430q0 12 9 20.5t23 8.5h416q14 0 23-8.5t9-20.5v-51l28 28v80H212v-487q0-22 8-43.5t23-38.5Zm551 575L126-794l20-20 668 668-20 20Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackW100.displayName = 'OnesyIconMaterialNoBackpackW100';

export default IconMaterialNoBackpackW100;
