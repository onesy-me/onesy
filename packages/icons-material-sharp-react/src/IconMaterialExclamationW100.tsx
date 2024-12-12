import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExclamationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExclamationW100'

      short_name='Exclamation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-396v-308h28v308h-28Zm0 140v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialExclamationW100.displayName = 'OnesyIconMaterialExclamationW100';

export default IconMaterialExclamationW100;
