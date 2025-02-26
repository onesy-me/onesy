import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkunreadMailboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxFilled'

      short_name='MarkunreadMailbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-560h160v-240h320v160H320v320h80v-240h480v560H80Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxFilled.displayName = 'OnesyIconMaterialMarkunreadMailboxFilled';

export default IconMaterialMarkunreadMailboxFilled;
