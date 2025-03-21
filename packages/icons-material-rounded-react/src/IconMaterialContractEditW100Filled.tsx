import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContractEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEditW100Filled'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-132q-29 0-48.5-19.5T172-200v-78q0-12.75 8.63-21.38Q189.25-308 202-308h90v-460q0-24.75 17.63-42.38Q327.25-828 352-828h376q24.75 0 42.38 17.62Q788-792.75 788-768v230q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-230q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v460h155q14.38 0 19.69 13 5.31 13-4.69 23-8 8-13 19.28-5 11.28-5 23.72v66.92q0 13.08-8.62 21.58-8.63 8.5-21.38 8.5H240Zm332-30v-36q0-6 2-11t7-10l202-201q5-4 9.89-6 4.89-2 9.78-2 5.33 0 10.65 2 5.33 2 9.68 6l37 38q4 5 6 10t2 10q0 5-1.5 10t-6.5 10L658.84-140.84Q654-136 649-134t-11 2h-36q-12.75 0-21.37-8.63Q572-149.25 572-162Zm231-162 37-38-37-38-38 38 38 38ZM394-552h292q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H394q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm0-108h292q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H394q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Z"/>
    </Icon>
  );
});

IconMaterialContractEditW100Filled.displayName = 'OnesyIconMaterialContractEditW100Filled';

export default IconMaterialContractEditW100Filled;
