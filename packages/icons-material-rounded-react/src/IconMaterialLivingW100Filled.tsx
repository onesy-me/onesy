import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLivingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingW100Filled'

      short_name='Living'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Zm88-140h400q33 0 40.5-15t7.5-33v-160q0-23-14.5-42T678-546v-34q0-36-26-62t-62-26H370q-36 0-62 26t-26 62v34q-21 5-35.5 24T232-480v160q0 33 15 40.5t33 7.5Zm0-28q-9 0-14.5-5.5T260-320v-160q0-17 11.5-28.5T300-520q17 0 28.5 11.5T340-480v80h280v-80q0-17 11.5-28.5T660-520q17 0 28.5 11.5T700-480v160q0 9-5.5 14.5T680-300H280Zm88-128v-52q0-27-17.5-45.5T310-546v-34q0-26 17-43t43-17h220q26 0 43 17t17 43v34q-23 2-40.5 20.5T592-480v52H368Z"/>
    </Icon>
  );
});

IconMaterialLivingW100Filled.displayName = 'OnesyIconMaterialLivingW100Filled';

export default IconMaterialLivingW100Filled;
