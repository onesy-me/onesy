import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRuleFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderW100Filled'

      short_name='RuleFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm121-170-46-46q-4-4-9.5-4.5T247-428q-5 5-5 10t5 10l45 45q9 9 21 9t21-9l130-130q4-4 4.5-9.5T464-513q-5-5-10-5t-10 5L313-382Zm327-62-55-55q-4-4-9-4t-9 4q-4 4-4 9.5t4 9.5l54 55-55 55q-4 4-3.5 9t4.5 9q4 4 9.5 4t9.5-4l54-54 55 55q4 4 9.5 3.5t9.5-4.5q4-4 4-9.5t-4-9.5l-55-54 55-55q4-4 4-9.5t-4-9.5q-4-4-9.5-4t-9.5 4l-55 55Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderW100Filled.displayName = 'OnesyIconMaterialRuleFolderW100Filled';

export default IconMaterialRuleFolderW100Filled;
