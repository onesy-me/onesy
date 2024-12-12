import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommitW100'

      short_name='Commit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-306q-69 0-117-45.5T305-466H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h159q10-69 58-114.5T480-654q69 0 117.5 45.5T655-494h159q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H655q-9 69-57.5 114.5T480-306Zm0-28q60 0 103-43t43-103q0-60-43-103t-103-43q-60 0-103 43t-43 103q0 60 43 103t103 43Z"/>
    </Icon>
  );
});

IconMaterialCommitW100.displayName = 'OnesyIconMaterialCommitW100';

export default IconMaterialCommitW100;
