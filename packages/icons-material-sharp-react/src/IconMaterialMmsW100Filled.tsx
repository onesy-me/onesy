import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMmsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsW100Filled'

      short_name='Mms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-436h332L548-572 448-448l-64-74-66 86ZM132-180v-648h696v536H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialMmsW100Filled.displayName = 'OnesyIconMaterialMmsW100Filled';

export default IconMaterialMmsW100Filled;
