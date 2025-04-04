import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelpCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpCenter'

      short_name='HelpCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm144-362q0-54-36.5-86T491-720q-45 0-79.5 18.5T357-648q-7 11-.5 24t20.5 19q12 5 25 .5t22-16.5q11-15 27.5-23t35.5-8q28 0 45.5 15t17.5 38q0 18-12 38t-36 40q-26 23-39 43t-17 47q-2 14 8.5 25.5T481-394q14 0 25.5-9.5T521-429q3-16 11-28.5t28-32.5q38-38 51-61t13-51ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialHelpCenter.displayName = 'OnesyIconMaterialHelpCenter';

export default IconMaterialHelpCenter;
