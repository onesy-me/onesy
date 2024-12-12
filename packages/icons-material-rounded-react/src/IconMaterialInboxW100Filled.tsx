import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxW100Filled'

      short_name='Inbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-116q32 0 60-16t42-45q5-10 14.5-14.5T617-368h143v-360q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v360h143q11 0 20.5 4.5T378-349q14 29 42 45t60 16Z"/>
    </Icon>
  );
});

IconMaterialInboxW100Filled.displayName = 'OnesyIconMaterialInboxW100Filled';

export default IconMaterialInboxW100Filled;
