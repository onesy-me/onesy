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
      <path d="M760-252v-108q0-60-43-103t-103-43H226l170 170-20 20-204-204 204-204 20 20-170 170h388q72 0 123 51t51 123v108h-28Z"/>
    </Icon>
  );
});

IconMaterialReplyW100.displayName = 'OnesyIconMaterialReplyW100';

export default IconMaterialReplyW100;
