import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsKrxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrxW100'

      short_name='SensorsKrx'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M191-286q-28-42-43.5-91T132-480q0-54 15.5-103t43.5-91l23 15q-26 38-40 83.5T160-480q0 50 14 95.5t40 83.5l-23 15Zm289 26q-91 0-155.5-64.5T260-480q0-91 64.5-155.5T480-700q91 0 155.5 64.5T700-480q0 91-64.5 155.5T480-260Zm0-28q80 0 136-56t56-136q0-80-56-136t-136-56q-80 0-136 56t-56 136q0 80 56 136t136 56Zm288 2-23-15q26-38 40.5-83.5T800-480q0-50-14.5-95.5T745-659l23-15q29 42 44.5 91T828-480q0 54-15.5 103T768-286ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrxW100.displayName = 'OnesyIconMaterialSensorsKrxW100';

export default IconMaterialSensorsKrxW100;
