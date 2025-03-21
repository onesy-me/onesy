import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogoutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutW100Filled'

      short_name='Logout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h235q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h235q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm501-294H384q-6 0-10-4t-4-10q0-6 4-10t10-4h349l-80-80q-4-4-4.5-9.5T653-594q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T653-366q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialLogoutW100Filled.displayName = 'OnesyIconMaterialLogoutW100Filled';

export default IconMaterialLogoutW100Filled;
