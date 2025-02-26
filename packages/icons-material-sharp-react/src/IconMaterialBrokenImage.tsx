import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrokenImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImage'

      short_name='BrokenImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm120-337 160-160 160 160 160-160 40 40v-183H200v263l40 40Zm-40 257h560v-264l-40-40-160 160-160-160-160 160-40-40v184Zm0 0v-264 80-376 560Z"/>
    </Icon>
  );
});

IconMaterialBrokenImage.displayName = 'OnesyIconMaterialBrokenImage';

export default IconMaterialBrokenImage;
