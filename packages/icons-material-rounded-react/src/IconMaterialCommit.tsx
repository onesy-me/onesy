import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Commit'

      short_name='Commit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-73 0-127.5-45.5T284-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h164q14-69 68.5-114.5T480-680q73 0 127.5 45.5T676-520h164q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H676q-14 69-68.5 114.5T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialCommit.displayName = 'OnesyIconMaterialCommit';

export default IconMaterialCommit;
