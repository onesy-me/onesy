import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoginW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginW100Filled'

      short_name='Login'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M493-172q-6 0-10-4t-4-10q0-6 4-10t10-4h235q12 0 22-10t10-22v-496q0-12-10-22t-22-10H493q-6 0-10-4t-4-10q0-6 4-10t10-4h235q26 0 43 17t17 43v496q0 26-17 43t-43 17H493Zm43-294H187q-6 0-10-4t-4-10q0-6 4-10t10-4h349l-79.82-80q-3.96-4-4.46-9.5t4.46-10.5q4.95-5 9.89-5 4.93 0 9.93 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T456-366q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialLoginW100Filled.displayName = 'OnesyIconMaterialLoginW100Filled';

export default IconMaterialLoginW100Filled;
