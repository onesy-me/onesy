import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneLeftW100Filled'

      short_name='SplitSceneLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-212q-11 0-19.5-8.5T594-240v-480q0-11 8.5-19.5T622-748h146q26 0 43 17t17 43v416q0 26-17 43t-43 17H622Zm-142 80q-6 0-10-4t-4-10v-66H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h274v-66q0-6 4-10t10-4q6 0 10 4t4 10v668q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneLeftW100Filled.displayName = 'OnesyIconMaterialSplitSceneLeftW100Filled';

export default IconMaterialSplitSceneLeftW100Filled;
