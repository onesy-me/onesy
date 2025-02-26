import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Check'

      short_name='Check'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
    </Icon>
  );
});

IconMaterialCheck.displayName = 'OnesyIconMaterialCheck';

export default IconMaterialCheck;
