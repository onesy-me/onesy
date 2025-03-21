import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommitFilled'

      short_name='Commit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-73 0-127.5-45.5T284-440H80v-80h204q14-69 68.5-114.5T480-680q73 0 127.5 45.5T676-520h204v80H676q-14 69-68.5 114.5T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialCommitFilled.displayName = 'OnesyIconMaterialCommitFilled';

export default IconMaterialCommitFilled;
