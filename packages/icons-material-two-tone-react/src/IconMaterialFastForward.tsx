import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForward'

      short_name='FastForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><polygon opacity=".3" points="15,9.86 15,14.14 18.03,12"/><polygon opacity=".3" points="6,9.86 6,14.14 9.03,12"/><path d="M4,18l8.5-6L4,6V18z M6,9.86L9.03,12L6,14.14V9.86z"/><path d="M21.5,12L13,6v12L21.5,12z M15,9.86L18.03,12L15,14.14V9.86z"/></g></g>
    </Icon>
  );
});

IconMaterialFastForward.displayName = 'OnesyIconMaterialFastForward';

export default IconMaterialFastForward;
