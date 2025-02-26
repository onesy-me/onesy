import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelPresentationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationFilled'

      short_name='CancelPresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationFilled.displayName = 'OnesyIconMaterialCancelPresentationFilled';

export default IconMaterialCancelPresentationFilled;
