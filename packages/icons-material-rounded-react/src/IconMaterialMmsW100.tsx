import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMmsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsW100'

      short_name='Mms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M348-436h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMmsW100.displayName = 'OnesyIconMaterialMmsW100';

export default IconMaterialMmsW100;
