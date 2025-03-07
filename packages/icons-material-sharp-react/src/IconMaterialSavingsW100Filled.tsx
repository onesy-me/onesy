import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSavingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsW100Filled'

      short_name='Savings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-532q11 0 19.5-8.5T668-560q0-11-8.5-19.5T640-588q-11 0-19.5 8.5T612-560q0 11 8.5 19.5T640-532Zm-320-94h200v-28H320v28ZM219-172q-28-102-57.5-202T132-580q0-70 49-119t119-49h226q25-33 58.5-56.5T660-828q3 0 5.5 1.5t2.5 4.5q0 9-3 11-6 20-10.5 39t-8.5 39l125 125h57v189l-103 34-64 213H532v-80H348v80H219Z"/>
    </Icon>
  );
});

IconMaterialSavingsW100Filled.displayName = 'OnesyIconMaterialSavingsW100Filled';

export default IconMaterialSavingsW100Filled;
