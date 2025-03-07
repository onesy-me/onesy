import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopChromebookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookW100'

      short_name='LaptopChromebook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-248q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-424q0-24.75 17.63-42.38Q167.25-760 192-760h576q24.75 0 42.38 17.62Q828-724.75 828-700v424h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H66Zm348-28h132q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2H414q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm-254-56h640v-368q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v368Zm320-200Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookW100.displayName = 'OnesyIconMaterialLaptopChromebookW100';

export default IconMaterialLaptopChromebookW100;
