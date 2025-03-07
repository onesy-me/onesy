import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThingsToDoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThingsToDoW100Filled'

      short_name='ThingsToDo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-200v-186h-38q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h38q0-71 51-120t123-54v-125.94q0-13.06 8.63-21.56 8.62-8.5 21.37-8.5h120q12.75 0 21.38 8.62Q646-726.75 646-714v40q0 12.75-8.74 21.37-8.74 8.63-21.66 8.63H494v56q72 5 123 54t51 120h38q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-38v186h90q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H202q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h90Zm28 0h146v-186H320v186Zm174 0h146v-186H494v186Z"/>
    </Icon>
  );
});

IconMaterialThingsToDoW100Filled.displayName = 'OnesyIconMaterialThingsToDoW100Filled';

export default IconMaterialThingsToDoW100Filled;
