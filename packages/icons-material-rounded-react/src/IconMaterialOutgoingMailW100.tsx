import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutgoingMailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMailW100'

      short_name='OutgoingMail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M789-306H600q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h189l-79-81q-4-4-3.5-9.5t4.5-9.67q3.67-3.83 9.33-3.83 5.67 0 9.67 4l92 93q5 5 7 10.22 2 5.21 2 10.78 0 5.57-2 10.78-2 5.22-7 10.22l-93 93q-4 4-9.5 3.5t-9.67-4.67Q706-211 706-216t4-9l79-81Zm-623 0q-24.75 0-42.37-17.63Q106-341.25 106-366v-388q0-24.75 17.63-42.38Q141.25-814 166-814h508q24.75 0 42.38 17.62Q734-778.75 734-754v206q0 5-4.5 9.5t-9.93 4.5q-5.77 0-9.67-4.03-3.9-4.02-3.9-9.97v-216L416-552 134-764v398q0 14 9 23t23 9h326q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H166Zm-16-480 266 200 274-200H150Zm-16 452v-452 452Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMailW100.displayName = 'OnesyIconMaterialOutgoingMailW100';

export default IconMaterialOutgoingMailW100;
