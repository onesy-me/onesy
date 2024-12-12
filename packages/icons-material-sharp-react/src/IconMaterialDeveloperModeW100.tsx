import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeW100'

      short_name='DeveloperMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M344-334 198-480l146-146 20 20-126 126 126 126-20 20Zm-92 54h28v66h400v-66h28v188H252v-188Zm28-400h-28v-188h456v188h-28v-66H280v66Zm0 494v66h400v-66H280Zm0-588h400v-66H280v66Zm336 440-20-20 126-126-126-126 20-20 146 146-146 146ZM280-774v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeW100.displayName = 'OnesyIconMaterialDeveloperModeW100';

export default IconMaterialDeveloperModeW100;
