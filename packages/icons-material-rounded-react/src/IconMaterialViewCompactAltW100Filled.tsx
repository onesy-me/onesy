import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompactAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAltW100Filled'

      short_name='ViewCompactAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M369-339h48q12.75 0 21.38-8.63Q447-356.25 447-369v-48q0-12.75-8.62-21.38Q429.75-447 417-447h-48q-12.75 0-21.37 8.62Q339-429.75 339-417v48q0 12.75 8.63 21.37Q356.25-339 369-339Zm0-174h48q12.75 0 21.38-8.63Q447-530.25 447-543v-48q0-12.75-8.62-21.38Q429.75-621 417-621h-48q-12.75 0-21.37 8.62Q339-603.75 339-591v48q0 12.75 8.63 21.37Q356.25-513 369-513Zm174 174h48q12.75 0 21.38-8.63Q621-356.25 621-369v-48q0-12.75-8.62-21.38Q603.75-447 591-447h-48q-12.75 0-21.37 8.62Q513-429.75 513-417v48q0 12.75 8.63 21.37Q530.25-339 543-339Zm0-174h48q12.75 0 21.38-8.63Q621-530.25 621-543v-48q0-12.75-8.62-21.38Q603.75-621 591-621h-48q-12.75 0-21.37 8.62Q513-603.75 513-591v48q0 12.75 8.63 21.37Q530.25-513 543-513ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAltW100Filled.displayName = 'OnesyIconMaterialViewCompactAltW100Filled';

export default IconMaterialViewCompactAltW100Filled;
