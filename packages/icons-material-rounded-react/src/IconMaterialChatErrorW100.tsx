import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatErrorW100'

      short_name='ChatError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-540 95 94q4 4 9.5 3.5t9.5-4.5q4-4 4-9t-4-9l-94-95 94-95q4-4 3.5-9.5T593-674q-4-4-9-4t-9 4l-95 94-95-94q-4-4-9.5-3.5T366-673q-4 4-4 9t4 9l94 95-94 95q-4 4-3.5 9.5t4.5 9.5q4 4 9 4t9-4l95-94ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialChatErrorW100.displayName = 'OnesyIconMaterialChatErrorW100';

export default IconMaterialChatErrorW100;
