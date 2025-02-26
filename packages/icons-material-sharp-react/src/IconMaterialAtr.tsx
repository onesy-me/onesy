import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAtr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Atr'

      short_name='Atr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm480 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM480-560q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialAtr.displayName = 'OnesyIconMaterialAtr';

export default IconMaterialAtr;
