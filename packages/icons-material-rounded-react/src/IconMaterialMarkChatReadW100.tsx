import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatReadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadW100'

      short_name='MarkChatRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m694-236 160-160q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10L715-218q-9 9-21 9t-21-9l-74-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l75 76Zm-450-56-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v260q0 6-4 10t-10 4q-6 0-10-4t-4-10v-260q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72h260q6 0 10 4t4 10q0 6-4 10t-10 4H244Zm-84-28v72-552 480Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadW100.displayName = 'OnesyIconMaterialMarkChatReadW100';

export default IconMaterialMarkChatReadW100;
