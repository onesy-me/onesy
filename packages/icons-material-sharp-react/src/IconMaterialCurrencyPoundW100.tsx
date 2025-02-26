import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyPoundW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyPoundW100'

      short_name='CurrencyPound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M269-172v-39q25-17 44.5-35.5T346-285q13-20 20-41.5t7-43.5q0-17-1.5-30.5T365-428h-96v-28h75q-35-37-55-76t-20-82q0-81 56.5-137.5T463-808q56 0 100.5 27.5T633-708l-26 11q-22-38-59.5-60.5T463-780q-69 0-117.5 48.5T297-614q0 42 22 79t64 79h154v28H395q3 13 4.5 27t1.5 31q0 51-27.5 95T302-200h261q42 0 67-17t38-47l24 12q-15 37-50 58.5T563-172H269Z"/>
    </Icon>
  );
});

IconMaterialCurrencyPoundW100.displayName = 'OnesyIconMaterialCurrencyPoundW100';

export default IconMaterialCurrencyPoundW100;
