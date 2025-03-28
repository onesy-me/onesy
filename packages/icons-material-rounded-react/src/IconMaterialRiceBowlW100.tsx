import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRiceBowlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RiceBowlW100'

      short_name='RiceBowl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-132q-12.75 0-21.37-8.71-8.63-8.7-8.63-21.58V-185q-99-39-169.5-115.5T132-480q0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480q0 103-70.5 179.5T588-185v22.71q0 12.88-8.62 21.58Q570.75-132 558-132H402Zm-28-348h212v-302q-26.5-9-53-13.5t-53-4.5q-26.5 0-53 4.5T374-782v302Zm-214 0h186v-291q-85 40-135.5 118.5T160-480Zm454 0h186q0-94-50.5-172.5T614-771v291ZM400-160h160v-44q88-35 157-96t81-152H162q12 91 81 152t157 96v44Zm0 0h160-160Z"/>
    </Icon>
  );
});

IconMaterialRiceBowlW100.displayName = 'OnesyIconMaterialRiceBowlW100';

export default IconMaterialRiceBowlW100;
