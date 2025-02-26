import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileFriendlyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyW100Filled'

      short_name='MobileFriendly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-92v-776h456v184h-28v-62H240v532h400v-62h28v184H212Zm386-264L464-490l20-20 114 114 228-228 20 20-248 248Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyW100Filled.displayName = 'OnesyIconMaterialMobileFriendlyW100Filled';

export default IconMaterialMobileFriendlyW100Filled;
