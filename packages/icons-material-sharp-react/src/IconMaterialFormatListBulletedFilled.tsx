import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatListBulletedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListBulletedFilled'

      short_name='FormatListBulleted'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulletedFilled.displayName = 'OnesyIconMaterialFormatListBulletedFilled';

export default IconMaterialFormatListBulletedFilled;
