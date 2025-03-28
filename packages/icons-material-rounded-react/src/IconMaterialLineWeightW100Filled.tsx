import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineWeightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightW100Filled'

      short_name='LineWeight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M257-250q-2.8 0-4.9-2.14-2.1-2.15-2.1-5 0-2.86 2.1-4.86 2.1-2 4.9-2h446q2.8 0 4.9 2.14 2.1 2.15 2.1 5 0 2.86-2.1 4.86-2.1 2-4.9 2H257Zm7-94q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h432q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H264Zm-4-108q-4.25 0-7.12-2.88Q250-457.75 250-462q0-12.75 8.63-21.38Q267.25-492 280-492h400q12.75 0 21.38 8.62Q710-474.75 710-462q0 4.25-2.87 7.12Q704.25-452 700-452H260Zm20-122q-12.75 0-21.37-8.63Q250-591.25 250-604v-76q0-12.75 8.63-21.38Q267.25-710 280-710h400q12.75 0 21.38 8.62Q710-692.75 710-680v76q0 12.75-8.62 21.37Q692.75-574 680-574H280Z"/>
    </Icon>
  );
});

IconMaterialLineWeightW100Filled.displayName = 'OnesyIconMaterialLineWeightW100Filled';

export default IconMaterialLineWeightW100Filled;
