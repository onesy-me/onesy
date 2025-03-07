import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompactAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAltW100'

      short_name='ViewCompactAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M369-339h48q13 0 21.5-8.5T447-369v-48q0-13-8.5-21.5T417-447h-48q-13 0-21.5 8.5T339-417v48q0 13 8.5 21.5T369-339Zm0-174h48q13 0 21.5-8.5T447-543v-48q0-13-8.5-21.5T417-621h-48q-13 0-21.5 8.5T339-591v48q0 13 8.5 21.5T369-513Zm174 174h48q13 0 21.5-8.5T621-369v-48q0-13-8.5-21.5T591-447h-48q-13 0-21.5 8.5T513-417v48q0 13 8.5 21.5T543-339Zm0-174h48q13 0 21.5-8.5T621-543v-48q0-13-8.5-21.5T591-621h-48q-13 0-21.5 8.5T513-591v48q0 13 8.5 21.5T543-513ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAltW100.displayName = 'OnesyIconMaterialViewCompactAltW100';

export default IconMaterialViewCompactAltW100;
