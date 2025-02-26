import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTablet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tablet'

      short_name='Tablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h880v640H40Zm120-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z"/>
    </Icon>
  );
});

IconMaterialTablet.displayName = 'OnesyIconMaterialTablet';

export default IconMaterialTablet;
