import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinInvokeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeW100Filled'

      short_name='PinInvoke'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h340q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h576q12 0 22-10t10-22v-180q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v180q0 26-17 43t-43 17H192Zm354-275L375-316q-4 4-9.5 4.5t-10.72-4.5q-4.78-5-4.78-10t5-10l172-171H414q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h130q12.75 0 21.38 8.62Q574-517.75 574-505v130q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-112Zm192-81q-37.5 0-63.75-26.25T648-658q0-37.5 26.25-63.75T738-748q37.5 0 63.75 26.25T828-658q0 37.5-26.25 63.75T738-568Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeW100Filled.displayName = 'OnesyIconMaterialPinInvokeW100Filled';

export default IconMaterialPinInvokeW100Filled;
