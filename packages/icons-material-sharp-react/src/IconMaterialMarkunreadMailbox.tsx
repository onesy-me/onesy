import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkunreadMailbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailbox'

      short_name='MarkunreadMailbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400v-160h-80v400h640v-400H400v-80h480v560H80v-560h160v-240h320v160H320v320h-80Zm-80-160v160-160 400-400Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailbox.displayName = 'OnesyIconMaterialMarkunreadMailbox';

export default IconMaterialMarkunreadMailbox;
