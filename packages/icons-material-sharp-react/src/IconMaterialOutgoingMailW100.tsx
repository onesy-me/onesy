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
      <path d="m720-197-19-19 88-90H586v-28h203l-88-90 19-19 123 123-123 123ZM166-306q-24.75 0-42.37-17.63Q106-341.25 106-366v-388q0-24.75 17.63-42.38Q141.25-814 166-814h508q24.75 0 42.38 17.62Q734-778.75 734-754v220h-28v-230L416-552 134-764v398q0 14 9 23t23 9h340v28H166Zm-16-480 266 200 274-200H150Zm-16 452v-452 452Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMailW100.displayName = 'OnesyIconMaterialOutgoingMailW100';

export default IconMaterialOutgoingMailW100;
