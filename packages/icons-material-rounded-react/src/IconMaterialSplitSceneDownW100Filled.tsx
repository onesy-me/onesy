import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneDownW100Filled'

      short_name='SplitSceneDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-768q0-26 17-43t43-17h416q26 0 43 17t17 43v146q0 11-8.5 19.5T720-594H240q-11 0-19.5-8.5T212-622v-146Zm-80 288q0-6 4-10t10-4h668q6 0 10 4t4 10q0 6-4 10t-10 4h-66v274q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-274h-66q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneDownW100Filled.displayName = 'OnesyIconMaterialSplitSceneDownW100Filled';

export default IconMaterialSplitSceneDownW100Filled;
