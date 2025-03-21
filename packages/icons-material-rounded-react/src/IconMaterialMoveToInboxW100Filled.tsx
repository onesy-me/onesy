import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveToInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxW100Filled'

      short_name='MoveToInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-116q32 0 60-16t42-45q5-10 14.5-14.5T617-368h143v-360q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v360h143q11 0 20.5 4.5T378-349q14 29 42 45t60 16Zm-14-202v-180q0-6 4-10t10-4q6 0 10 4t4 10v180l80-80q2-2 4.5-3t5-1q2.5 0 5.5 1t5 3q5 5 5 10t-5 10l-93 93q-5 5-10 7t-11 2q-6 0-11-2t-10-7l-93-93q-2-2-3-4.5t-1-5q0-2.5 1-5.5t3-5q5-5 10-5t10 5l80 80Z"/>
    </Icon>
  );
});

IconMaterialMoveToInboxW100Filled.displayName = 'OnesyIconMaterialMoveToInboxW100Filled';

export default IconMaterialMoveToInboxW100Filled;
