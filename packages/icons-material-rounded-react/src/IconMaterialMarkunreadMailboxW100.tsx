import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkunreadMailboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxW100'

      short_name='MarkunreadMailbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-560h-80q-12 0-22 10t-10 22v336q0 12 10 22t22 10h576q12 0 22-10t10-22v-336q0-12-10-22t-22-10H414q-6 0-10-4t-4-10q0-6 4-10t10-4h354q26 0 43 17t17 43v336q0 26-17 43t-43 17H192q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h80v-210q0-13 8.5-21.5T302-828h182q13 0 21.5 8.5T514-798v80q0 13-8.5 21.5T484-688H300v274q0 6-4 10t-10 4q-6 0-10-4t-4-10v-146Zm-112 0v400-400 160-160Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxW100.displayName = 'OnesyIconMaterialMarkunreadMailboxW100';

export default IconMaterialMarkunreadMailboxW100;
