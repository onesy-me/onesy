import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Login'

      short_name='Login'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120q-17 0-28.5-11.5T480-160q0-17 11.5-28.5T520-200h240v-560H520q-17 0-28.5-11.5T480-800q0-17 11.5-28.5T520-840h240q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H520Zm-73-320H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h287l-75-75q-11-11-11-27t11-28q11-12 28-12.5t29 11.5l143 143q12 12 12 28t-12 28L429-309q-12 12-28.5 11.5T372-310q-11-12-10.5-28.5T373-366l74-74Z"/>
    </Icon>
  );
});

IconMaterialLogin.displayName = 'OnesyIconMaterialLogin';

export default IconMaterialLogin;
