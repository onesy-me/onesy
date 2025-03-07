import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreateNewFolderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderW100'

      short_name='CreateNewFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-336q0-14-9-23t-23-9H448l-71-71q-5-5-10.5-7t-11.5-2H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Zm426-186v66q0 6 4 10t10 4q6 0 10-4t4-10v-66h66q6 0 10-4t4-10q0-6-4-10t-10-4h-66v-66q0-6-4-10t-10-4q-6 0-10 4t-4 10v66h-66q-6 0-10 4t-4 10q0 6 4 10t10 4h66Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderW100.displayName = 'OnesyIconMaterialCreateNewFolderW100';

export default IconMaterialCreateNewFolderW100;
