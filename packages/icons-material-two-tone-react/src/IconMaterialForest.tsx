import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forest'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="16.48,10 18.16,10 15,5.49 13.22,8.03 16,12 14.14,12 16.71,16 20.34,16"/><polygon opacity=".3" points="12.16,10 9,5.49 5.84,10 7.52,10 3.66,16 14.34,16 10.48,10"/><path d="M20.14,12H22L15,2l-3,4.29L9,2L2,12h1.86L0,18h7v4h4v-4h2v4h4v-4h7L20.14,12z M3.66,16l3.86-6H5.84L9,5.49L12.16,10h-1.68 l3.86,6H3.66z M16.71,16l-2.57-4H16l-2.78-3.97L15,5.49L18.16,10h-1.68l3.86,6H16.71z"/></g></g>
    </Icon>
  );
});

IconMaterialForest.displayName = 'OnesyIconMaterialForest';

export default IconMaterialForest;
