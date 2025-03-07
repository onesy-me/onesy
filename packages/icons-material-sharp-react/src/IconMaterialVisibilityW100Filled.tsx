import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityW100Filled'

      short_name='Visibility'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.24-364q56.76 0 96.26-39.74 39.5-39.73 39.5-96.5 0-56.76-39.74-96.26-39.73-39.5-96.5-39.5-56.76 0-96.26 39.74-39.5 39.73-39.5 96.5 0 56.76 39.74 96.26 39.73 39.5 96.5 39.5Zm-.24-28q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.14 140Q355-252 252-319.5 149-387 96-500q53-113 155.86-180.5 102.85-67.5 228-67.5Q605-748 708-680.5 811-613 864-500q-53 113-155.86 180.5-102.85 67.5-228 67.5Z"/>
    </Icon>
  );
});

IconMaterialVisibilityW100Filled.displayName = 'OnesyIconMaterialVisibilityW100Filled';

export default IconMaterialVisibilityW100Filled;
