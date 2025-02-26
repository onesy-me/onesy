import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxW100'

      short_name='AddBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-306h28v-160h160v-28H494v-160h-28v160H306v28h160v160ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialAddBoxW100.displayName = 'OnesyIconMaterialAddBoxW100';

export default IconMaterialAddBoxW100;
