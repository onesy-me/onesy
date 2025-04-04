import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreateNewFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderW100Filled'

      short_name='CreateNewFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t42.82-17h161.97q12.52 0 23.86 5Q389-738 397-730l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm394-214v66q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-66h66q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-66v-66q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v66h-66q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderW100Filled.displayName = 'OnesyIconMaterialCreateNewFolderW100Filled';

export default IconMaterialCreateNewFolderW100Filled;
