import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoChatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatW100'

      short_name='VideoChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-426h208q13 0 21.5-8.5T574-456v-88l63 63q4 4 8.5 2t4.5-7v-148q0-5-4.5-7t-8.5 2l-63 63v-88q0-13-8.5-21.5T544-694H336q-13 0-21.5 8.5T306-664v208q0 13 8.5 21.5T336-426Zm-92 134-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoChatW100.displayName = 'OnesyIconMaterialVideoChatW100';

export default IconMaterialVideoChatW100;
