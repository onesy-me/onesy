import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyYuanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuanFilled'

      short_name='CurrencyYuan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160v-240H280q-17 0-28.5-11.5T240-440q0-17 11.5-28.5T280-480h149L239-778q-13-20-1.5-41t35.5-21q11 0 20 5t14 14l173 273 173-273q5-9 14-14t20-5q24 0 35.5 21t-1.5 41L531-480h149q17 0 28.5 11.5T720-440q0 17-11.5 28.5T680-400H520v240q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYuanFilled.displayName = 'OnesyIconMaterialCurrencyYuanFilled';

export default IconMaterialCurrencyYuanFilled;
