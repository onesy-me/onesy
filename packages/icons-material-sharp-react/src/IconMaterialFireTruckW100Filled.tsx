import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireTruckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireTruckW100Filled'

      short_name='FireTruck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M279.76-160Q238-160 209-189.17q-29-29.16-29-70.83H92v-260h440v-188h134v-44h68v44h68l66 196v252h-88q0 41.67-29.24 70.83-29.23 29.17-71 29.17Q638-160 609-189.17q-29-29.16-29-70.83H380q0 42-29.24 71-29.23 29-71 29Zm.24-28q30 0 51-21t21-50.5q0-29.5-21-51T280-332q-30 0-51 21.5t-21 51q0 29.5 21 50.5t51 21Zm400 0q30 0 51-21t21-50.5q0-29.5-21-51T680-332q-30 0-51 21.5t-21 51q0 29.5 21 50.5t51 21ZM560-520h276l-53-160H560v160ZM92-560v-28h40v-92H92v-28h368v28h-40v92h40v28H92Zm68-28h102v-92H160v92Zm130 0h102v-92H290v92Z"/>
    </Icon>
  );
});

IconMaterialFireTruckW100Filled.displayName = 'OnesyIconMaterialFireTruckW100Filled';

export default IconMaterialFireTruckW100Filled;
