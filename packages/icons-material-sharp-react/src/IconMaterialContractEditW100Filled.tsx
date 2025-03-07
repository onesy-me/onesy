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
      <path d="M472-132H240q-29 0-48.5-19.5T172-200v-108h120v-520h496v258l-28 28v-258H320v492h206l-54 54v122Zm100 0v-78l231-230 77 78-230 230h-78ZM380-524v-28h320v28H380Zm0-108v-28h320v28H380Zm423 308 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialContractEditW100Filled.displayName = 'OnesyIconMaterialContractEditW100Filled';

export default IconMaterialContractEditW100Filled;
