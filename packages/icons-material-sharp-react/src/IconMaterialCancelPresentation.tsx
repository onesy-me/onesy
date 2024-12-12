import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelPresentation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentation'

      short_name='CancelPresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentation.displayName = 'OnesyIconMaterialCancelPresentation';

export default IconMaterialCancelPresentation;
