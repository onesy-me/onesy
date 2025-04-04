import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackHandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandW100'

      short_name='BackHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-92q-76 0-142-37T252-232L119-453q-3-5-2.5-11t5.5-11q8-8 18.5-9t19.5 5l172 113v-382q0-5 4.02-9.5 4.03-4.5 9.98-4.5 5 0 9.5 4.5t4.5 9.5v379q0 17.87-16 26.44-16 8.56-31-1.44L154-450l122 202q35 60 95.04 94 60.03 34 128.96 34 107.98 0 183.99-75T760-379v-355q0-5 4.03-9.5 4.02-4.5 9.97-4.5 5 0 9.5 4.5t4.5 9.5v355q0 119.87-83.85 203.44Q620.29-92 500-92Zm-10.96-750q5.96 0 9.96 4.5 4 4.5 4 9.5v308q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-308q0-5 4.04-9.5 4.03-4.5 10-4.5Zm143 40q5.96 0 9.96 4.5 4 4.5 4 9.5v268q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-268q0-5 4.04-9.5 4.03-4.5 10-4.5ZM457-313Z"/>
    </Icon>
  );
});

IconMaterialBackHandW100.displayName = 'OnesyIconMaterialBackHandW100';

export default IconMaterialBackHandW100;
