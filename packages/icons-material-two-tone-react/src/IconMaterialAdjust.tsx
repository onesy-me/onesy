import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdjust = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Adjust'

      short_name='Adjust'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0-7C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </Icon>
  );
});

IconMaterialAdjust.displayName = 'OnesyIconMaterialAdjust';

export default IconMaterialAdjust;
