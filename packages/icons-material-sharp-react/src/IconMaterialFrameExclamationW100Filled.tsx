import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrameExclamationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameExclamationW100Filled'

      short_name='FrameExclamation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-396v-308h28v308h-28Zm0 140v-28h28v28h-28ZM92-92v-160h28v132h132v28H92Zm616 0v-28h132v-132h28v160H708ZM92-708v-160h160v28H120v132H92Zm748 0v-132H708v-28h160v160h-28Z"/>
    </Icon>
  );
});

IconMaterialFrameExclamationW100Filled.displayName = 'OnesyIconMaterialFrameExclamationW100Filled';

export default IconMaterialFrameExclamationW100Filled;
