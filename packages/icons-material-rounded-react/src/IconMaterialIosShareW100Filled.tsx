import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIosShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareW100Filled'

      short_name='IosShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-92q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h60q6 0 10 4t4 10q0 6-4 10t-10 4h-60q-12 0-22 10t-10 22v376q0 12 10 22t22 10h416q12 0 22-10t10-22v-376q0-12-10-22t-22-10h-60q-6 0-10-4t-4-10q0-6 4-10t10-4h60q26 0 43 17t17 43v376q0 26-17 43t-43 17H272Zm194-686-80 80q-4 4-9.5 4.5T366-698q-5-5-5-10t5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5T594-698q-5 5-10 5t-10-5l-80-80v418q0 6-4 10t-10 4q-6 0-10-4t-4-10v-418Z"/>
    </Icon>
  );
});

IconMaterialIosShareW100Filled.displayName = 'OnesyIconMaterialIosShareW100Filled';

export default IconMaterialIosShareW100Filled;
