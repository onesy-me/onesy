import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProgressActivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProgressActivityFilled'

      short_name='ProgressActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880v80q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480h80q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/>
    </Icon>
  );
});

IconMaterialProgressActivityFilled.displayName = 'OnesyIconMaterialProgressActivityFilled';

export default IconMaterialProgressActivityFilled;
