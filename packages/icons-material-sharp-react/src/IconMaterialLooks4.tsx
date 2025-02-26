import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4'

      short_name='Looks4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm320-80h80v-400h-80v160h-80v-160h-80v240h160v160Z"/>
    </Icon>
  );
});

IconMaterialLooks4.displayName = 'OnesyIconMaterialLooks4';

export default IconMaterialLooks4;
