import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurityUpdateGoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateGoodFilled'

      short_name='SecurityUpdateGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M442-360 330-472l56-56 56 56 142-142 56 56-198 198ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateGoodFilled.displayName = 'OnesyIconMaterialSecurityUpdateGoodFilled';

export default IconMaterialSecurityUpdateGoodFilled;
