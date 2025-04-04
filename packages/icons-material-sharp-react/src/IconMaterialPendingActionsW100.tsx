import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPendingActionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingActionsW100'

      short_name='PendingActions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-132q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm66-62 20-20-72-72.19V-394h-28v120l80 80Zm-594 22v-616h251q4-20 19.5-34t37.5-14q22 0 37.5 14t19.5 34h251v298q-8-3-14-5.5t-14-4.5v-260H628v80H332v-80H200v560h287q2 8 5 14.5t8 13.5H172Zm308.18-576q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialPendingActionsW100.displayName = 'OnesyIconMaterialPendingActionsW100';

export default IconMaterialPendingActionsW100;
