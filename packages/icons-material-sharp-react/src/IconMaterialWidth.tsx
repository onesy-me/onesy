import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Width'

      short_name='Width'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320 120-480l160-160 57 56-64 64h414l-63-64 56-56 160 160-160 160-56-56 63-64H273l63 64-56 56Z"/>
    </Icon>
  );
});

IconMaterialWidth.displayName = 'OnesyIconMaterialWidth';

export default IconMaterialWidth;
