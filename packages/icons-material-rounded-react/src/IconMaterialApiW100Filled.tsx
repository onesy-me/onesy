import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiW100Filled'

      short_name='Api'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-217-58-58 101-101q9-9 20-13t22-4q11 0 22 4t20 13l101 101-58 58-85-85-85 85ZM285-337 184-438q-9-9-13-20t-4-22q0-11 4-22t13-20l101-101 58 58-85 85 85 85-58 58Zm390 0-58-58 85-85-85-85 58-58 101 101q9 9 13 20t4 22q0 11-4 22t-13 20L675-337ZM438-184 337-285l58-58 85 85 85-85 58 58-101 101q-9 9-20 13t-22 4q-11 0-22-4t-20-13Z"/>
    </Icon>
  );
});

IconMaterialApiW100Filled.displayName = 'OnesyIconMaterialApiW100Filled';

export default IconMaterialApiW100Filled;
