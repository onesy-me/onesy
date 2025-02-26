import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubscriptionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsW100'

      short_name='Subscriptions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h576q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-336q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v336q0 12 10 22t22 10Zm257-104 126-84q7-5 7-12t-7-12l-126-84q-8-5-15.5-1t-7.5 13v168q0 9 7.5 13t15.5-1ZM200-668q-6 0-10-4t-4-10q0-6 4-10t10-4h560q6 0 10 4t4 10q0 6-4 10t-10 4H200Zm120-108q-6 0-10-4t-4-10q0-6 4-10t10-4h320q6 0 10 4t4 10q0 6-4 10t-10 4H320ZM160-160v-400 400Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsW100.displayName = 'OnesyIconMaterialSubscriptionsW100';

export default IconMaterialSubscriptionsW100;
