import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPendingActionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingActionsW100Filled'

      short_name='PendingActions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-132q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm14-154.2V-380q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v94q0 5.57 2 10.78 2 5.22 7 10.22l61 61q4 4 9.5 4.5T776-204q5-5 5-10t-5-10l-62-62.2ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h191q4-20 19.5-34t37.5-14q22 0 37.5 14t19.5 34h191q24.75 0 42.38 17.62Q788-752.75 788-728v202q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-202q0-12-10-22t-22-10H628v50q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63H361.58q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37v-50H232q-12 0-22 10t-10 22v496q0 14 9 23t23 9h249q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H232Zm248.18-576q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialPendingActionsW100Filled.displayName = 'OnesyIconMaterialPendingActionsW100Filled';

export default IconMaterialPendingActionsW100Filled;
