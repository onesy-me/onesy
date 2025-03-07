import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardToInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxW100Filled'

      short_name='ForwardToInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M809-212H620q-6 0-10-4t-4-10q0-6 4-10t10-4h190l-80-80q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l92 92q5 5 7 10t2 11q0 5-2 10.5t-7 10.5l-93 93q-4 4-9.5 3.5T730-113q-4-4-4-9t4-9l79-81Zm-617 0q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v256q0 14-10.5 21.5T793-407q-12-3-24.5-5t-25.5-2q-82 0-139.5 57.5T546-217q0 2-1.5 3.5T541-212H192Zm288-308L187-713q-5-3-10.5-2t-8.5 6q-3 5-2 11t6 9l291 192q8 5 17 5t17-5l291-192q5-3 6.5-9t-2.5-11q-3-5-8.5-5.5T773-712L480-520Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxW100Filled.displayName = 'OnesyIconMaterialForwardToInboxW100Filled';

export default IconMaterialForwardToInboxW100Filled;
