import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInBrowserW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserW100'

      short_name='OpenInBrowser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H628q-6 0-10-4t-4-10q0-6 4-10t10-4h100q12 0 22-10t10-22v-448H200v448q0 12 10 22t22 10h100q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm234-14v-240l-80 80q-4 4-9.5 4.5T366-346q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T594-346q-5 5-10 5t-10-5l-80-80v240q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserW100.displayName = 'OnesyIconMaterialOpenInBrowserW100';

export default IconMaterialOpenInBrowserW100;
