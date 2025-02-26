import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyFrancFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyFrancFilled'

      short_name='CurrencyFranc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-120h-80v-80h80v-520h440v80H360v240h320v80H360v120h160v80H360v120h-80Z"/>
    </Icon>
  );
});

IconMaterialCurrencyFrancFilled.displayName = 'OnesyIconMaterialCurrencyFrancFilled';

export default IconMaterialCurrencyFrancFilled;
