import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOrdersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrdersW100Filled'

      short_name='Orders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-272v-352l-62-137q-2-5 0-11t7-8q5-2 11 0t8 7l66 147h476l66-147q2-5 8-7t11 .13q5 1.87 7 7.87t0 11l-62 137v352q0 24.75-17.62 42.37Q712.75-212 688-212H272q-24.75 0-42.37-17.63Q212-247.25 212-272Zm188-194h160q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H400q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Z"/>
    </Icon>
  );
});

IconMaterialOrdersW100Filled.displayName = 'OnesyIconMaterialOrdersW100Filled';

export default IconMaterialOrdersW100Filled;
