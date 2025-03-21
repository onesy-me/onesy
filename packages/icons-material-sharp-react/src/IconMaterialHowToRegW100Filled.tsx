import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToRegW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegW100Filled'

      short_name='HowToReg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M609-180 507-282l20-20 82 82 202-202 20 20-222 222ZM397-512q-44.55 0-76.27-31.72Q289-575.45 289-620t31.73-76.28Q352.45-728 397-728t76.27 31.72Q505-664.55 505-620t-31.73 76.28Q441.55-512 397-512Zm88 110L365-282l51 50H129v-52q0-30 14.5-45.5T179-356q51-26 96-39t122-13q30 0 51.5 1.5T485-402Z"/>
    </Icon>
  );
});

IconMaterialHowToRegW100Filled.displayName = 'OnesyIconMaterialHowToRegW100Filled';

export default IconMaterialHowToRegW100Filled;
