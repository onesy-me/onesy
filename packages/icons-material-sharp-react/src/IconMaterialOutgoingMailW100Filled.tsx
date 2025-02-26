import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutgoingMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMailW100Filled'

      short_name='OutgoingMail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-197-19-19 88-90H586v-28h203l-88-90 19-19 123 123-123 123ZM416-552l290-212q0-3-1.5-6.5t-4-6.5q-2.5-3-5-5.5T690-786L416-586 150-786q-3 1-5.5 3.5t-5 5.5q-2.5 3-4 6.5T134-764l282 212ZM166-306q-25 0-42.5-17.5T106-366v-388q0-25 17.5-42.5T166-814h508q25 0 42.5 17.5T734-754v220h-28q-82 0-141 58.5T506-334v28H166Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMailW100Filled.displayName = 'OnesyIconMaterialOutgoingMailW100Filled';

export default IconMaterialOutgoingMailW100Filled;
