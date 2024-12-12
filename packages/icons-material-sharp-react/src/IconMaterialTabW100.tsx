import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabW100'

      short_name='Tab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240h640v-320H520v-160H160v480Zm-28 28v-536h696v536H132Zm28-28v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTabW100.displayName = 'OnesyIconMaterialTabW100';

export default IconMaterialTabW100;
