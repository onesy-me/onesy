import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContractW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractW100Filled'

      short_name='Contract'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-132q-29 0-48.5-19.5T172-200v-48q0-24.75 17.63-42.38Q207.25-308 232-308h60v-460q0-24.75 17.63-42.38Q327.25-828 352-828h376q24.75 0 42.38 17.62Q788-792.75 788-768v568q0 29-19.5 48.5T720-132H240Zm480-28q17 0 28.5-11.5T760-200v-568q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v460h300q24.75 0 42.38 17.62Q680-272.75 680-248v48q0 17 11.5 28.5T720-160ZM394-632q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h292q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H394Zm0 108q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h292q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H394Z"/>
    </Icon>
  );
});

IconMaterialContractW100Filled.displayName = 'OnesyIconMaterialContractW100Filled';

export default IconMaterialContractW100Filled;
