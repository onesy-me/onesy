import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessW100'

      short_name='SwitchAccess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-316v-328h328v328H316Zm28-28h272v-272H344v272Zm-172 28v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 432v-40h40v40h-40Zm0-576v-40h40v40h-40Zm288 576v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 432v-40h40v40h-40Zm0-288v-40h40v40h-40ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessW100.displayName = 'OnesyIconMaterialSwitchAccessW100';

export default IconMaterialSwitchAccessW100;
