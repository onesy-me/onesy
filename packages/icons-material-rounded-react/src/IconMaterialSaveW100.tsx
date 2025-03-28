import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveW100'

      short_name='Save'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h401q12 0 23.5 5t19.5 13l94 94q8 8 13 19.5t5 23.5v401q0 26-17 43t-43 17H232Zm528-474L646-760H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9h496q14 0 23-9t9-23v-414ZM480-316q28 0 48-20t20-48q0-28-20-48t-48-20q-28 0-48 20t-20 48q0 28 20 48t48 20ZM310-572h218q13 0 21.5-8.5T558-602v-48q0-13-8.5-21.5T528-680H310q-13 0-21.5 8.5T280-650v48q0 13 8.5 21.5T310-572Zm-110-74v446-560 114Z"/>
    </Icon>
  );
});

IconMaterialSaveW100.displayName = 'OnesyIconMaterialSaveW100';

export default IconMaterialSaveW100;
