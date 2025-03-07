import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFindInPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageW100Filled'

      short_name='FindInPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h276q14 0 26 5.5t20 16.5l140 167q7 8 10.5 18t3.5 21v355q0 15-13.5 21t-24.5-5L566-374q11-15 16.5-30.5T588-440q0-45-31.5-76.5T480-548q-45 0-76.5 31.5T372-440q0 45 31.5 76.5T480-332q18 0 33.5-5t32.5-17l171 171q14 14 6.5 32.5T696-132H272Zm208-228q-33 0-56.5-23.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 33-23.5 56.5T480-360Z"/>
    </Icon>
  );
});

IconMaterialFindInPageW100Filled.displayName = 'OnesyIconMaterialFindInPageW100Filled';

export default IconMaterialFindInPageW100Filled;
