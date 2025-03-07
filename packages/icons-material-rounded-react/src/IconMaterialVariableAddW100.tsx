import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariableAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableAddW100'

      short_name='VariableAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-332q-12.75 0-21.37-8.51-8.63-8.51-8.63-21.09v-236.82q0-12.58 8.63-21.08 8.62-8.5 21.37-8.5h556q12.75 0 21.38 8.62Q788-610.75 788-598v24q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-26H200v240h346q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H202Zm-2-28v-240 240Zm560 28H654q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H788v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Z"/>
    </Icon>
  );
});

IconMaterialVariableAddW100.displayName = 'OnesyIconMaterialVariableAddW100';

export default IconMaterialVariableAddW100;
