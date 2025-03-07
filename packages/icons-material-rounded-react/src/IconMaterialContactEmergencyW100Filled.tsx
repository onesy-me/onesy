import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactEmergencyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyW100Filled'

      short_name='ContactEmergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M52-192v-576h856v576H52Zm307.88-196q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM142-220h436q-42-48-98-78t-120-30q-64 0-120 30t-98 78Zm564-356v66q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-66l57 33q5 3 10.67 1.61 5.66-1.4 8.5-6.5 2.83-5.11 1.42-10.71-1.41-5.6-6.59-8.4l-57-33 57-33q5.18-2.8 6.59-8.4 1.41-5.6-1.42-10.71-2.84-5.1-8.5-6.5Q796-660 791-657l-57 33v-66q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v66l-57-33q-5-3-10.67-1.61-5.66 1.4-8.5 6.5-2.83 5.11-1.42 10.71 1.41 5.6 6.59 8.4l57 33-57 33q-5.18 2.8-6.59 8.4-1.41 5.6 1.42 10.71 2.84 5.1 8.5 6.5Q644-540 649-543l57-33Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyW100Filled.displayName = 'OnesyIconMaterialContactEmergencyW100Filled';

export default IconMaterialContactEmergencyW100Filled;
