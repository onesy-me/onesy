import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckW100'

      short_name='FactCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-496q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm168-106q6 0 10-4t4-10q0-6-4-10t-10-4H240q-6 0-10 4t-4 10q0 6 4 10t10 4h120Zm222-130-47-47q-4-4-10-4.5t-10 4.5q-4 4-3.5 10t4.5 10l45 45q9 9 21 9t21-9l130-130q4-4 4.5-9.5T733-568q-5-5-10-5t-10 5L582-436Zm-222-30q6 0 10-4t4-10q0-6-4-10t-10-4H240q-6 0-10 4t-4 10q0 6 4 10t10 4h120Zm0-160q6 0 10-4t4-10q0-6-4-10t-10-4H240q-6 0-10 4t-4 10q0 6 4 10t10 4h120ZM160-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialFactCheckW100.displayName = 'OnesyIconMaterialFactCheckW100';

export default IconMaterialFactCheckW100;
