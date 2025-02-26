import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChaletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletW100'

      short_name='Chalet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-526v-56l-36 36-20-20 56-56v-44h-44l-56 56-20-20 36-36h-56v-28h56l-36-36 20-20 56 55h44v-43l-56-56 20-20 36 36v-56h28v56l36-36 20 20-56 56v44h44l56-56 20 20-36 36h56v28h-56l36 36-20 20-56-56h-44v44l56 56-20 20-36-36v56h-28ZM594-353l-46-46v187H252v-188l-36 36-19-19 203-203 213 213-19 20ZM280-240h106v-94h28v94h106v-187L400-547 280-428v188Zm0 0h240-240Z"/>
    </Icon>
  );
});

IconMaterialChaletW100.displayName = 'OnesyIconMaterialChaletW100';

export default IconMaterialChaletW100;
