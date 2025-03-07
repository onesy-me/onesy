import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSavingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsW100'

      short_name='Savings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-532q11 0 19.5-8.5T668-560q0-11-8.5-19.5T640-588q-11 0-19.5 8.5T612-560q0 11 8.5 19.5T640-532Zm-320-94h200v-28H320v28ZM219-172q-28-102-57.5-202T132-580q0-70 49-119t119-49h226q25-33 58.5-56.5T660-828q3 0 5.5 2.5t2.5 5.5q0 1-.5 2t-.5 2q-8 20-12.5 41t-8.5 42l125 125h57v189l-103 34-64 213H532v-80H348v80H219Zm21-28h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T632-795q-29 8-50 28.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z"/>
    </Icon>
  );
});

IconMaterialSavingsW100.displayName = 'OnesyIconMaterialSavingsW100';

export default IconMaterialSavingsW100;
