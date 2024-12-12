import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoStableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableFilled'

      short_name='VideoStable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm599-80 92-346-488-134-92 346 488 134Z"/>
    </Icon>
  );
});

IconMaterialVideoStableFilled.displayName = 'OnesyIconMaterialVideoStableFilled';

export default IconMaterialVideoStableFilled;
