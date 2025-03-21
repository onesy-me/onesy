import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebW100Filled'

      short_name='Web'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h414v-160H160v128q0 12 10 22t22 10Zm442 0h134q12 0 22-10t10-22v-316H634v348ZM160-428h446v-160H160v160Z"/>
    </Icon>
  );
});

IconMaterialWebW100Filled.displayName = 'OnesyIconMaterialWebW100Filled';

export default IconMaterialWebW100Filled;
