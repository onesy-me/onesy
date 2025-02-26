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
      <path d="M280-160v-80h-40q-17 0-28.5-11.5T200-280q0-17 11.5-28.5T240-320h40v-80h-40q-17 0-28.5-11.5T200-440q0-17 11.5-28.5T240-480h40v-320q0-17 11.5-28.5T320-840h220q92 0 156 64t64 156q0 92-64 156t-156 64H360v80h120q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240H360v80q0 17-11.5 28.5T320-120q-17 0-28.5-11.5T280-160Zm80-320h180q58 0 99-41t41-99q0-58-41-99t-99-41H360v280Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRuble.displayName = 'OnesyIconMaterialCurrencyRuble';

export default IconMaterialCurrencyRuble;
