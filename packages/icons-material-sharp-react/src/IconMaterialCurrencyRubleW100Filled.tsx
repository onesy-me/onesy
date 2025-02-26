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
      <path d="M306-172v-110h-80v-28h80v-118h-80v-28h80v-332h248q75.27 0 127.64 52.31Q734-683.38 734-608.19T681.64-480.5Q629.27-428 554-428H334v118h160v28H334v110h-28Zm28-284h220q62.97 0 107.49-44.52Q706-545.04 706-608.02T661.49-715.5Q616.97-760 554-760H334v304Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRubleW100Filled.displayName = 'OnesyIconMaterialCurrencyRubleW100Filled';

export default IconMaterialCurrencyRubleW100Filled;
