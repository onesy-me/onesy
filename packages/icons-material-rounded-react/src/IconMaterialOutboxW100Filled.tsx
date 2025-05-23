import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxW100Filled'

      short_name='Outbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-116q32 0 60-16t42-45q5-10 14.5-14.5T617-368h143v-360q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v360h143q11 0 20.5 4.5T378-349q14 29 42 45t60 16Zm-14-342-80 80q-4 4-9.5 4.5T366-550q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T594-550q-5 5-10 5t-10-5l-80-80v180q0 6-4 10t-10 4q-6 0-10-4t-4-10v-180Z"/>
    </Icon>
  );
});

IconMaterialOutboxW100Filled.displayName = 'OnesyIconMaterialOutboxW100Filled';

export default IconMaterialOutboxW100Filled;
