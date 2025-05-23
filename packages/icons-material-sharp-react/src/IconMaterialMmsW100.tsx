import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMmsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsW100'

      short_name='Mms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-436h332L548-572 448-448l-64-74-66 86ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMmsW100.displayName = 'OnesyIconMaterialMmsW100';

export default IconMaterialMmsW100;
