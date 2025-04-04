import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnsubscribeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeW100Filled'

      short_name='Unsubscribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520 187-713q-5-3-10.5-2t-8.5 6q-3 5-2 11t6 9l291 192q8.13 5 17.06 5 8.94 0 16.94-5l291-192q5-3 6.5-9t-2.5-11q-3-5-8.5-5.5T773-712L480-520ZM760-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T760-92Zm-72-134h144.23q5.77 0 9.77-4.2t4-9.8q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2H687.77q-5.77 0-9.77 4.2t-4 9.8q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm-496 14q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v195q0 13-10 21t-24 6q-8-2-17-2h-17q-95.27 0-161.64 66.36Q532-335.27 532-240q0 11-7.5 19.5T506-212H192Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeW100Filled.displayName = 'OnesyIconMaterialUnsubscribeW100Filled';

export default IconMaterialUnsubscribeW100Filled;
