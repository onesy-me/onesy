import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftOrdersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftOrdersW100Filled'

      short_name='DraftOrders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93ZM352-382v-36q0-5.57 2-10.78 2-5.22 7-10.22l202-201q5-4 9.89-6 4.89-2 9.78-2 5.33 0 10.65 2 5.33 2 9.68 6l37 38q4 5 6 10t2 10q0 5-2 10t-6 10L439-361q-5 5-10.22 7-5.21 2-10.78 2h-36q-12.75 0-21.37-8.63Q352-369.25 352-382Zm231-162 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialDraftOrdersW100Filled.displayName = 'OnesyIconMaterialDraftOrdersW100Filled';

export default IconMaterialDraftOrdersW100Filled;
