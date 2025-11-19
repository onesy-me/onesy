import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessPawnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessPawnW100Filled'

      short_name='ChessPawn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-162q97-69 129.5-134.5T388-546H285v-28h111q-26-20-41.5-49T339-687q0-59 41-100t100-41q59 0 100 41t41 100q0 35-15.5 64T564-574h112v28H574q13 51 45 117t129 135v162H212Z"/>
    </Icon>
  );
});

IconMaterialChessPawnW100Filled.displayName = 'OnesyIconMaterialChessPawnW100Filled';

export default IconMaterialChessPawnW100Filled;
