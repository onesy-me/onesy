import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageW100Filled'

      short_name='RequestPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-306v27q0 5.2 3.9 9.1 3.9 3.9 9.1 3.9 6 0 10.5-4.5T494-281v-25h66q5.95 0 9.97-4.02Q574-314.05 574-320v-120q0-5.95-4.03-9.98Q565.95-454 560-454H414v-92h146q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-66v-27q0-5.2-3.9-9.1-3.9-3.9-9.1-3.9-6 0-10.5 4.5T466-599v25h-66q-5.95 0-9.98 4.03Q386-565.95 386-560v120q0 5.95 4.02 9.98Q394.05-426 400-426h146v92H400q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h241q12.44 0 23.72 5T556-810l174 174q8 8 13 19.28 5 11.28 5 23.72v401q0 26-17 43t-43 17H272Z"/>
    </Icon>
  );
});

IconMaterialRequestPageW100Filled.displayName = 'OnesyIconMaterialRequestPageW100Filled';

export default IconMaterialRequestPageW100Filled;
