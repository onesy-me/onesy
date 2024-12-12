import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabW100'

      short_name='Tab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-240h576q12 0 22-10t10-22v-288H550q-13 0-21.5-8.5T520-590v-130H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm0 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-28v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTabW100.displayName = 'OnesyIconMaterialTabW100';

export default IconMaterialTabW100;
