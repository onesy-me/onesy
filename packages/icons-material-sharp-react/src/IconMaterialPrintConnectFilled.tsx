import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintConnectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectFilled'

      short_name='PrintConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M718-153 604-266l57-56 57 56 141-141 57 56-198 198Zm-478 33v-160H80v-360h800v150q-27-14-56.5-22t-60.5-8q-78 0-141.5 44T530-360H320v160h204q7 22 17 42t24 38H240Zm0-560v-160h480v160H240Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectFilled.displayName = 'OnesyIconMaterialPrintConnectFilled';

export default IconMaterialPrintConnectFilled;
