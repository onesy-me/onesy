import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledByDefaultW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultW100'

      short_name='DisabledByDefault'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h560v-560H200v560Zm-28 28v-616h616v616H172Zm164-145 144-144 144 144 19-19-144-144 144-144-19-19-144 144-144-144-19 19 144 144-144 144 19 19ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultW100.displayName = 'OnesyIconMaterialDisabledByDefaultW100';

export default IconMaterialDisabledByDefaultW100;
