import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExclamationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExclamationW100Filled'

      short_name='Exclamation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-396v-308h28v308h-28Zm0 140v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialExclamationW100Filled.displayName = 'OnesyIconMaterialExclamationW100Filled';

export default IconMaterialExclamationW100Filled;
