import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyRubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRubleW100Filled'

      short_name='CurrencyRuble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-186v-96h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-118h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-302q0-12.75 8.63-21.38Q323.25-788 336-788h218q75.27 0 127.64 52.31Q734-683.38 734-608.19T681.64-480.5Q629.27-428 554-428H334v118h146q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H334v96q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm28-270h220q62.97 0 107.49-44.52Q706-545.04 706-608.02T661.49-715.5Q616.97-760 554-760H334v304Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRubleW100Filled.displayName = 'OnesyIconMaterialCurrencyRubleW100Filled';

export default IconMaterialCurrencyRubleW100Filled;
