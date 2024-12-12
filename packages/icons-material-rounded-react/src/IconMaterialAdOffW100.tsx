import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdOffW100'

      short_name='AdOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-5 .5-9t2.5-8l-17-17q-4-4-4.5-9.5T158-782q5-5 10-5t10 5l604 604q4 4 4.5 9.5T782-158q-5 5-10 5t-10-5l-16-16q-5 1-9 1.5t-9 .5H232Zm0-28h488L200-720v488q0 14 9 23t23 9Zm542-96q-5 0-9.5-3.5T760-310v-322H466q-12 0-23.5-5T423-650l-87-87q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h371q25 0 42.5 17.5T788-728v418q0 7-4.5 10.5T774-296Z"/>
    </Icon>
  );
});

IconMaterialAdOffW100.displayName = 'OnesyIconMaterialAdOffW100';

export default IconMaterialAdOffW100;
