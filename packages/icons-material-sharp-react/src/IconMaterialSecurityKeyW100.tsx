import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurityKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityKeyW100'

      short_name='SecurityKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M362-92v-177h-70v-599h376v599h-70v177H362Zm118-393q35 0 59.5-24.21T564-568q0-35.42-24.5-60.21T480-653q-35 0-59.5 24.79T396-568q0 34.58 24.5 58.79T480-485Zm-90 365h181v-149H390v149Zm-70-177h320v-543H320v543Zm160-216q-23 0-39-15.81-16-15.82-16-39.19 0-23 15.81-40 15.82-17 39.19-17 23 0 40 17t17 40q0 23-17 39t-40 16ZM320-297h320-320Z"/>
    </Icon>
  );
});

IconMaterialSecurityKeyW100.displayName = 'OnesyIconMaterialSecurityKeyW100';

export default IconMaterialSecurityKeyW100;
