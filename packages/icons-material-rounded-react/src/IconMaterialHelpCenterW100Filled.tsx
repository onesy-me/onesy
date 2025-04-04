import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelpCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpCenterW100Filled'

      short_name='HelpCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-285q11 0 18.5-7.5T508-311q0-11-7.5-18.5T482-337q-11 0-18.5 7.5T456-311q0 11 7.5 18.5T482-285Zm106-298q0-43-29.5-71.5T484-683q-30 0-58 15t-45 42q-3 5-1 11t8 8q6 2 12 0t9-7q13-21 30.5-31t42.5-10q35 0 56.5 20t21.5 52q0 18-9 34t-31 36q-26 25-38.5 45T467-425q-1 5 3 9.5t10 4.5q6 0 10-3.5t5-9.5q3-17 12-31t29-34q29-29 40.5-49.5T588-583ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialHelpCenterW100Filled.displayName = 'OnesyIconMaterialHelpCenterW100Filled';

export default IconMaterialHelpCenterW100Filled;
