import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutopay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Autopay'

      short_name='Autopay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23q-2.8 0-5.15-1.288Q4.5 20.425 3 18.3V20H1v-5h5v2H4.55q1.2 1.8 3.15 2.9Q9.65 21 12 21q1.875 0 3.513-.712 1.637-.713 2.85-1.926 1.212-1.212 1.925-2.85Q21 13.875 21 12h2q0 2.275-.862 4.275-.863 2-2.363 3.5t-3.5 2.362Q14.275 23 12 23ZM7.35 4.325l-.85-1.85q1.275-.725 2.588-1.1Q10.4 1 12 1q2.8 0 5.15 1.287Q19.5 3.575 21 5.7V4h2v5h-5V7h1.45q-1.2-1.8-3.15-2.9Q14.35 3 12 3q-1.325 0-2.462.362-1.138.363-2.188.963ZM4 12 2.75 9.25 0 8l2.75-1.25L4 4l1.25 2.75L8 8 5.25 9.25Zm3.8 4 3.4-9h1.6l3.4 9h-1.55l-.8-2.3H10.2L9.4 16Zm2.85-3.6h2.7l-1.3-3.75h-.1Z"/>
    </Icon>
  );
});

IconMaterialAutopay.displayName = 'OnesyIconMaterialAutopay';

export default IconMaterialAutopay;
