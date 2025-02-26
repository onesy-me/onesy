import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyW100'

      short_name='Reply'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m226-506 160 160q4 4 4.5 9.5T386-326q-5 5-10 5t-10-5L193-499q-9-9-9-21t9-21l173-173q4-4 9.5-4.5T386-714q5 5 5 10t-5 10L226-534h388q72 0 123 51t51 123v94q0 6-4 10t-10 4q-6 0-10-4t-4-10v-94q0-60-43-103t-103-43H226Z"/>
    </Icon>
  );
});

IconMaterialReplyW100.displayName = 'OnesyIconMaterialReplyW100';

export default IconMaterialReplyW100;
