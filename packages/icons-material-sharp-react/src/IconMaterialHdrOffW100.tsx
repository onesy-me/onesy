import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffW100'

      short_name='HdrOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M786-134 132-788l20-20 654 654-20 20Zm0-242-36-80h-66v66l-28-28v-166h146l22 22v81l-22 23h-22l36 82h-30ZM684-484h112v-72H684v72Zm-120-26-74-74h52l22 22v52ZM136-376v-208h28v80h112v-80h28v208h-28v-100H164v100h-28Zm260-168 28 28v112h112l28 28H396v-168Z"/>
    </Icon>
  );
});

IconMaterialHdrOffW100.displayName = 'OnesyIconMaterialHdrOffW100';

export default IconMaterialHdrOffW100;
