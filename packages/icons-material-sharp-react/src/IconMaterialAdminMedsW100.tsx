import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdminMedsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminMedsW100'

      short_name='AdminMeds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M457-337q-26 25-60.5 24.5T337-337q-24-25-24.5-59.5T337-456l166-167q25-25 60.5-25t60.5 25q25 25 24.5 59.5T624-504L457-337Zm-101-20q23 23 47.5 16.5T437-356l73-74-80-80-74 73q-17 17-17 40t17 40Zm248-246q-23-23-47.5-16.5T523-604l-73 74 80 80 74-73q17-17 17-40t-17-40ZM172-172v-616h254q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h254v616H172Zm28-28h560v-560H200v560Zm280-580q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAdminMedsW100.displayName = 'OnesyIconMaterialAdminMedsW100';

export default IconMaterialAdminMedsW100;
