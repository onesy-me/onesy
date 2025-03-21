import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContractEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEditW100'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-632v-28h320v28H380Zm0 108v-28h320v28H380Zm92 364H200h272Zm0 28H240q-29 0-48.5-19.5T172-200v-108h120v-520h496v258l-28 28v-258H320v492h206l-28 28H200v80q0 17 11.5 28.5T240-160h232v28Zm100 0v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM600-160h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialContractEditW100.displayName = 'OnesyIconMaterialContractEditW100';

export default IconMaterialContractEditW100;
