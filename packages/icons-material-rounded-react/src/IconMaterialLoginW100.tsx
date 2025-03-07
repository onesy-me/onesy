import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoginW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginW100'

      short_name='Login'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M493-172q-6 0-10-4t-4-10q0-6 4-10t10-4h235q12 0 22-10t10-22v-496q0-12-10-22t-22-10H493q-6 0-10-4t-4-10q0-6 4-10t10-4h235q26 0 43 17t17 43v496q0 26-17 43t-43 17H493Zm43-294H186q-6 0-10-4t-4-10q0-6 4-10t10-4h350l-80-80q-4-4-4.5-9.5T456-594q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T456-366q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialLoginW100.displayName = 'OnesyIconMaterialLoginW100';

export default IconMaterialLoginW100;
