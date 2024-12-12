import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckW100Filled'

      short_name='FactCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Zm168-134q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H240q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h120Zm222-130-47-47q-4-4-10-4.5t-10 4.5q-4 4-3.5 10t4.5 10l45 45q9 9 21 9t21-9l130-130q4-4 4.5-9.5T733-568q-5-5-10-5t-10 5L582-436Zm-222-30q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H240q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h120Zm0-160q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H240q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h120Z"/>
    </Icon>
  );
});

IconMaterialFactCheckW100Filled.displayName = 'OnesyIconMaterialFactCheckW100Filled';

export default IconMaterialFactCheckW100Filled;
