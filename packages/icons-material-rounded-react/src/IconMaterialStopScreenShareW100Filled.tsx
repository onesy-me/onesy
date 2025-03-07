import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopScreenShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareW100Filled'

      short_name='StopScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-200H94q-6 0-10-4t-4-10q0-6 4-10t10-4h598l-40-40H192q-26 0-43-17t-17-43v-376q0-17 9-30.5t23-21.5l-90-90q-4-4-4.5-9.5T74-866q5-5 10-5t10 5L866-94q4 4 4.5 9.5T866-74q-5 5-10 5t-10-5L720-200ZM404-517l-19-19q-9 9-17 25t-8 37v66q0 6 4 10t10 4q6 0 10-4t4-10v-66q0-14 4-24t12-19Zm394 241L557-517l25-26q5-5 5-10.5t-5-10.5l-35-35q-4-4-8.5-2t-4.5 7v26h-28L310-764h458q26 0 43 17t17 43v376q0 14-6.5 28.5T798-276Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareW100Filled.displayName = 'OnesyIconMaterialStopScreenShareW100Filled';

export default IconMaterialStopScreenShareW100Filled;
