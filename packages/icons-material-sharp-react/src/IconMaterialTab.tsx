import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTab = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tab'

      short_name='Tab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240h640v-320H520v-160H160v480Zm-80 80v-640h800v640H80Zm80-80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTab.displayName = 'OnesyIconMaterialTab';

export default IconMaterialTab;
