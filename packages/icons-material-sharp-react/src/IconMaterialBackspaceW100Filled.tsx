import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackspaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceW100Filled'

      short_name='Backspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M333-252 172-480l163-228h453v456H333Zm105-104 104-104 104 104 20-20-104-104 104-104-20-20-104 104-104-104-20 20 104 104-104 104 20 20Z"/>
    </Icon>
  );
});

IconMaterialBackspaceW100Filled.displayName = 'OnesyIconMaterialBackspaceW100Filled';

export default IconMaterialBackspaceW100Filled;
