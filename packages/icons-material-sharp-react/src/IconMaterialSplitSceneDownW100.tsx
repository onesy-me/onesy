import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneDownW100'

      short_name='SplitSceneDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-594v-234h536v234h-28v-206H240v206h-28Zm0 462v-334h-80v-28h696v28h-80v334H212Zm28-668h480-480Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneDownW100.displayName = 'OnesyIconMaterialSplitSceneDownW100';

export default IconMaterialSplitSceneDownW100;
