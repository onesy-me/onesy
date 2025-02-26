import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rule'

      short_name='Rule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m576-160-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm79-360L513-662l56-56 85 85 170-170 56 57-225 226ZM80-280v-80h360v80H80Zm0-320v-80h360v80H80Z"/>
    </Icon>
  );
});

IconMaterialRule.displayName = 'OnesyIconMaterialRule';

export default IconMaterialRule;
