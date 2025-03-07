import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinInvokeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeW100'

      short_name='PinInvoke'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h414v28H160v480h640v-226h28v254H132Zm233-94-20-20 182-181H400v-28h174v174h-28v-126L365-306Zm373-262q-37.5 0-63.75-26.25T648-658q0-37.5 26.25-63.75T738-748q37.5 0 63.75 26.25T828-658q0 37.5-26.25 63.75T738-568Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeW100.displayName = 'OnesyIconMaterialPinInvokeW100';

export default IconMaterialPinInvokeW100;
