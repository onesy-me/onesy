import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PalletW100'

      short_name='Pallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-206v-56h604v56h-56v-28H508v28h-56v-28H234v28h-56Zm75-136v-456h454v456H253Zm28-28h398v-400H281v400Zm79-262h240v-28H360v28Zm-79 262v-400 400Z"/>
    </Icon>
  );
});

IconMaterialPalletW100.displayName = 'OnesyIconMaterialPalletW100';

export default IconMaterialPalletW100;
