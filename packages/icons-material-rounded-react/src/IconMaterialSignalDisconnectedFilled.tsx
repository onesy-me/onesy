import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalDisconnectedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalDisconnectedFilled'

      short_name='SignalDisconnected'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M748-560q0 38-11 75t-33 69q-8 11-21.5 11.5T658-415q-10-10-10-24t8-26q12-22 18-46t6-49q0-31-10-60t-28-54q-8-12-8-26t10-24q10-10 24-10t22 11q28 35 43 76.5t15 86.5ZM480-660q42 0 71 29t29 71v10q0 5-2 10-3 12-15.5 14.5T541-532l-89-89q-9-9-6-21t14-16q5-2 10-2h10Zm400 100q0 66-20 127t-59 114q-8 11-22 11t-24-10q-10-10-10-24t8-26q29-42 44-91t15-101q0-58-18.5-112T739-771q-9-11-9-25t10-24q10-10 24-9.5t23 11.5q45 55 69 121t24 137ZM763-84 520-327v167q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-247L280-566v6q0 31 10 60t28 54q8 12 8 26t-10 24q-10 10-24 10t-22-11q-27-35-42.5-76.5T212-560q0-17 2-33t7-33l-51-51q-11 29-16.5 58t-5.5 59q0 58 18.5 112t54.5 99q9 11 9 25t-10 24q-10 10-24 9.5T173-302q-45-55-69-121T80-560q0-44 9.5-86.5T118-729l-34-34q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T819-84q-12 11-28 11.5T763-84Z"/>
    </Icon>
  );
});

IconMaterialSignalDisconnectedFilled.displayName = 'OnesyIconMaterialSignalDisconnectedFilled';

export default IconMaterialSignalDisconnectedFilled;
