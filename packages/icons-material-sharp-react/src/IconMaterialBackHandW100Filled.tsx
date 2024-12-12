import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandW100Filled'

      short_name='BackHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-92q-76 0-142-37T252-232L112-465l27-27 193 126v-396h28v256h115v-336h28v336h115v-296h28v296h114v-242h28v369q0 119.87-83.85 203.44Q620.29-92 500-92Z"/>
    </Icon>
  );
});

IconMaterialBackHandW100Filled.displayName = 'OnesyIconMaterialBackHandW100Filled';

export default IconMaterialBackHandW100Filled;
