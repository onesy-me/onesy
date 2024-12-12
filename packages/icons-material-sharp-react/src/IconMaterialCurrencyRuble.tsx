import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyRuble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRuble'

      short_name='CurrencyRuble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-120h-80v-80h80v-80h-80v-80h80v-360h260q92 0 156 64t64 156q0 92-64 156t-156 64H360v80h160v80H360v120h-80Zm80-360h180q58 0 99-41t41-99q0-58-41-99t-99-41H360v280Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRuble.displayName = 'OnesyIconMaterialCurrencyRuble';

export default IconMaterialCurrencyRuble;
