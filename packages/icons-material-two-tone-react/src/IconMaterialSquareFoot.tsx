import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareFoot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFoot'

      short_name='SquareFoot'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="7,17 12.76,17 7,11.24"/><g><path d="M17.66,17.66l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.94-1.94l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.94-1.94l-1.06,1.06 l-0.71-0.71l1.06-1.06L9.7,9.7l-1.06,1.06l-0.71-0.71l1.06-1.06L7.05,7.05L5.99,8.11L5.28,7.4l1.06-1.06L4,4v14c0,1.1,0.9,2,2,2 h14L17.66,17.66z M7,17v-5.76L12.76,17H7z"/></g></g></g>
    </Icon>
  );
});

IconMaterialSquareFoot.displayName = 'OnesyIconMaterialSquareFoot';

export default IconMaterialSquareFoot;
