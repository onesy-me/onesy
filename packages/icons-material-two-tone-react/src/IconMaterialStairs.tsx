import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStairs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stairs'

      short_name='Stairs'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" x="0"/><path d="M19,5v14H5V5H19 M18,6h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18V6z" opacity=".3"/><path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z M18,6h-4.42 v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18V6z"/></g>
    </Icon>
  );
});

IconMaterialStairs.displayName = 'OnesyIconMaterialStairs';

export default IconMaterialStairs;
