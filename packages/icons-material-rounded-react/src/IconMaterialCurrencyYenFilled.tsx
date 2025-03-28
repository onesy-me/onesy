import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyYenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYenFilled'

      short_name='CurrencyYen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160v-120H280q-17 0-28.5-11.5T240-320q0-17 11.5-28.5T280-360h160v-80H280q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h123L239-779q-13-20-1.5-40.5T273-840q11 0 20 5t14 14l173 273 173-273q5-9 14-14t20-5q24 0 35.5 21t-1.5 41L557-520h123q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440H520v80h160q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280H520v120q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYenFilled.displayName = 'OnesyIconMaterialCurrencyYenFilled';

export default IconMaterialCurrencyYenFilled;
