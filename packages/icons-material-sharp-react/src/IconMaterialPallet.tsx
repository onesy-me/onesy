import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPallet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pallet'

      short_name='Pallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-160h800v160H760v-80H540v80H420v-80H200v80H80Zm120-240v-560h560v560H200Zm80-80h400v-400H280v400Zm80-240h240v-80H360v80Zm-80 240v-400 400Z"/>
    </Icon>
  );
});

IconMaterialPallet.displayName = 'OnesyIconMaterialPallet';

export default IconMaterialPallet;
