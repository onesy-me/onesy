import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSlightRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightRightW100Filled'

      short_name='TurnSlightRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M399.96-172q-5.96 0-9.96-4.02-4-4.03-4-9.98v-260q0-12.44 5-23.72T404-489l232-231H522q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h131q12.75 0 21.38 8.62Q683-730.75 683-718v131q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-114L423-470q-5 5-7 10.5t-2 11.5v262q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightRightW100Filled.displayName = 'OnesyIconMaterialTurnSlightRightW100Filled';

export default IconMaterialTurnSlightRightW100Filled;
