import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4Filled'

      short_name='Looks4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm400-160h80v-400h-80v160h-80v-160h-80v240h160v160Z"/>
    </Icon>
  );
});

IconMaterialLooks4Filled.displayName = 'OnesyIconMaterialLooks4Filled';

export default IconMaterialLooks4Filled;
