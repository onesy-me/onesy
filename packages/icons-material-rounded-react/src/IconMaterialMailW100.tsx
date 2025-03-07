import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailW100'

      short_name='Mail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm608-486L497-497q-4 2-8 3.5t-9 1.5q-5 0-9-1.5t-8-3.5L160-698v426q0 14 9 23t23 9h576q14 0 23-9t9-23v-426ZM480-520l304-200H176l304 200ZM160-698v8-24.5 1.5-7 7-2.5 25.5-8 458-458Z"/>
    </Icon>
  );
});

IconMaterialMailW100.displayName = 'OnesyIconMaterialMailW100';

export default IconMaterialMailW100;
