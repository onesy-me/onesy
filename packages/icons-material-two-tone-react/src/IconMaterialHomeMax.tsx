import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMax = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMax'

      short_name='HomeMax'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M19,7H5C3.9,7,3,7.9,3,9v5c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9C21,7.9,20.1,7,19,7z" opacity=".3"/><path d="M19,5H5C2.79,5,1,6.79,1,9v5c0,2.21,1.79,4,4,4h2v1h10v-1h2c2.21,0,4-1.79,4-4V9C23,6.79,21.21,5,19,5z M21,14 c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2V14z"/></g></g>
    </Icon>
  );
});

IconMaterialHomeMax.displayName = 'OnesyIconMaterialHomeMax';

export default IconMaterialHomeMax;
