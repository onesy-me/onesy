import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Feed'

      short_name='Feed'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M15,5H5v14h14V9h-4V5z M7,7h5v2H7V7z M17,17H7v-2h10V17z M17,11v2H7v-2H17z" opacity=".3"/><path d="M7,13h10v-2H7V13z M7,17h10v-2H7V17z M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M19,19H5V5 h10v4h4V19z M12,7H7v2h5V7z"/></g>
    </Icon>
  );
});

IconMaterialFeed.displayName = 'OnesyIconMaterialFeed';

export default IconMaterialFeed;
