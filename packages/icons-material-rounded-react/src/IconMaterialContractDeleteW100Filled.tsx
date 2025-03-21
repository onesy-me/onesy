import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContractDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractDeleteW100Filled'

      short_name='ContractDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m765-215-75 75q-4 4-9.5 4.5T670-140q-5-5-5-10t5-10l75-75-75-75q-4-4-4.5-9.5T670-330q5-5 10-5t10 5l75 75 75-75q4-4 9.5-4.5T860-330q5 5 5 10t-5 10l-75 75 75 75q4 4 4.5 9.5T860-140q-5 5-10 5t-10-5l-75-75ZM394-632q-6 0-10-4t-4-10q0-6 4-10t10-4h292q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm0 108q-6 0-10-4t-4-10q0-6 4-10t10-4h292q6 0 10 4t4 10q0 6-4 10t-10 4H394ZM240-132q-29 0-48.5-19.5T172-200v-48q0-25 17.5-42.5T232-308h60v-460q0-25 17.5-42.5T352-828h376q25 0 42.5 17.5T788-768v270q0 6-4 10t-10 4q-6 0-10-4t-4-10v-270q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v460h188q14 0 21.5 10t4.5 24q-2 10-2.5 19.5T531-235q0 17 2.5 34t7.5 34q4 13-3.5 24T517-132H240Z"/>
    </Icon>
  );
});

IconMaterialContractDeleteW100Filled.displayName = 'OnesyIconMaterialContractDeleteW100Filled';

export default IconMaterialContractDeleteW100Filled;
