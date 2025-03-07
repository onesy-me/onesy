import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHideImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImage'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="16.17,19 14.17,17 6,17 9,13 11.25,16 12.07,14.9 5,7.83 5,19"/><polygon opacity=".3" points="7.83,5 19,16.17 19,5"/><path d="M19,5v11.17l2,2V5c0-1.1-0.9-2-2-2H5.83l2,2H19z"/><path d="M2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61l1.41-1.41L2.81,2.81z M5,19V7.83l7.07,7.07L11.25,16 L9,13l-3,4h8.17l2,2H5z"/></g></g>
    </Icon>
  );
});

IconMaterialHideImage.displayName = 'OnesyIconMaterialHideImage';

export default IconMaterialHideImage;
