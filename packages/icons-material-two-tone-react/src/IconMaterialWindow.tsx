import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Window'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="6" opacity=".3" width="6" x="13" y="13"/><rect height="6" opacity=".3" width="6" x="5" y="13"/><rect height="6" opacity=".3" width="6" x="5" y="5"/><rect height="6" opacity=".3" width="6" x="13" y="5"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/></g></g>
    </Icon>
  );
});

IconMaterialWindow.displayName = 'OnesyIconMaterialWindow';

export default IconMaterialWindow;
