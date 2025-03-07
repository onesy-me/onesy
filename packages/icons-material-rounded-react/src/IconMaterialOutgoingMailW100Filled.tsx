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
      <path d="M789-306H600q-6 0-10-4t-4-10q0-6 4-10t10-4h189l-79-81q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l92 93q5 5 7 10t2 11q0 6-2 11t-7 10l-93 93q-4 4-9.5 3.5T710-207q-4-4-4-9t4-9l79-81ZM416-552l290-212q0-3-1.5-6.5t-4-6.5q-2.5-3-5-5.5T690-786L416-586 150-786q-3 1-5.5 3.5t-5 5.5q-2.5 3-4 6.5T134-764l282 212ZM166-306q-25 0-42.5-17.5T106-366v-388q0-25 17.5-42.5T166-814h508q25 0 42.5 17.5T734-754v194q0 11-7.5 18.5T708-534q-42 1-77.5 15T565-475q-30 30-44 65.5T506-332q0 11-7.5 18.5T480-306H166Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMailW100Filled.displayName = 'OnesyIconMaterialOutgoingMailW100Filled';

export default IconMaterialOutgoingMailW100Filled;
