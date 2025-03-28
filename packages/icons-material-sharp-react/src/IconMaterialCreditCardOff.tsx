import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOff'

      short_name='CreditCardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m880-194-80-80v-206H594L434-640h366v-80H354l-80-80h606v606ZM385-462Zm192-35Zm-211 17H160v240h446L366-480ZM818-28 686-160H80v-640h80l80 80h-80v80h46L26-820l57-57L875-85l-57 57Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOff.displayName = 'OnesyIconMaterialCreditCardOff';

export default IconMaterialCreditCardOff;
