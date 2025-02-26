import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettopComponent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponent'

      short_name='SettopComponent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-280v-400h800v400H80Zm80-80h640v-240H160v240Zm40-80h240v-80H200v80Zm320 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm-480 80v-240 240Z"/>
    </Icon>
  );
});

IconMaterialSettopComponent.displayName = 'OnesyIconMaterialSettopComponent';

export default IconMaterialSettopComponent;
