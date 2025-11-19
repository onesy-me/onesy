import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneW100Filled'

      short_name='SplitScene'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h146q11 0 19.5 8.5T366-720v480q0 11-8.5 19.5T338-212H192Zm288 80q-6 0-10-4t-4-10v-668q0-6 4-10t10-4q6 0 10 4t4 10v66h274q26 0 43 17t17 43v416q0 26-17 43t-43 17H494v66q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneW100Filled.displayName = 'OnesyIconMaterialSplitSceneW100Filled';

export default IconMaterialSplitSceneW100Filled;
