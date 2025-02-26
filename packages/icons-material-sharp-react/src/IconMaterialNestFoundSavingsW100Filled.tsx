import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestFoundSavingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavingsW100Filled'

      short_name='NestFoundSavings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-114-98-98H172v-616h616v616H578l-98 98Zm0-232q75 0 124.5-52.5T654-520v-174H480q-70 0-122 49.5T306-520q0 26 10 54t29 57l-41 40 20 19 38-38q27 20 58.5 31t59.5 11Zm-115-84 137-137 21 20-138 137-20-20Z"/>
    </Icon>
  );
});

IconMaterialNestFoundSavingsW100Filled.displayName = 'OnesyIconMaterialNestFoundSavingsW100Filled';

export default IconMaterialNestFoundSavingsW100Filled;
