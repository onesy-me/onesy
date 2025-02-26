import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMaximizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeW100'

      short_name='Maximize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-760v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialMaximizeW100.displayName = 'OnesyIconMaterialMaximizeW100';

export default IconMaterialMaximizeW100;
