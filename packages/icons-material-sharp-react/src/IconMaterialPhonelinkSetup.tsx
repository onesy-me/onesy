import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkSetup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkSetup'

      short_name='PhonelinkSetup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-320-6-50q-8-3-14-6.5t-12-9.5l-46 20-40-70 40-30q-2-8-2-15t2-15l-40-30 42-68 44 18q6-5 12-8t14-6l6-50h80l6 50q8 3 14 6t12 8l44-18 42 68-40 30q2 8 2 15t-2 15l40 30-40 70-46-20q-6 6-12 9.5t-14 6.5l-6 50h-80Zm40-100q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkSetup.displayName = 'OnesyIconMaterialPhonelinkSetup';

export default IconMaterialPhonelinkSetup;
