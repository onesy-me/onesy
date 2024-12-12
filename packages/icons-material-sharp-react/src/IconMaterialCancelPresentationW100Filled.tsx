import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelPresentationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationW100Filled'

      short_name='CancelPresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-356 104-104 104 104 20-20-104-104 104-104-20-20-104 104-104-104-20 20 104 104-104 104 20 20ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationW100Filled.displayName = 'OnesyIconMaterialCancelPresentationW100Filled';

export default IconMaterialCancelPresentationW100Filled;
