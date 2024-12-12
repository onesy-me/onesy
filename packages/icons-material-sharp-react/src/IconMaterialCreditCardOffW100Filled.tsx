import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffW100Filled'

      short_name='CreditCardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-244 550-522h250v-76H474L324-748h504v504ZM160-522h238l-76-76H160v76ZM852-68 708-212H132v-536h80l28 28h-40L90-830l20-20L872-88l-20 20Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffW100Filled.displayName = 'OnesyIconMaterialCreditCardOffW100Filled';

export default IconMaterialCreditCardOffW100Filled;
