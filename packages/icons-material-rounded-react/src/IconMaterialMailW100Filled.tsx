import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailW100Filled'

      short_name='Mail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm288-280q5 0 9-1.5t8-3.5l291-193q5-3 6-8.5t-2-10.5q-2-4-8-5.5t-11 1.5L480-520 187-713q-5-3-10.5-2.5T168-710q-3 5-2 11t6 9l291 193q4 2 8 3.5t9 1.5Z"/>
    </Icon>
  );
});

IconMaterialMailW100Filled.displayName = 'OnesyIconMaterialMailW100Filled';

export default IconMaterialMailW100Filled;
