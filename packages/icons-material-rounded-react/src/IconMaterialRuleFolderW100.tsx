import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRuleFolderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderW100'

      short_name='RuleFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m313-382-46-46q-4-4-9.5-4.5T247-428q-5 5-5 10t5 10l45 45q9 9 21 9t21-9l130-130q4-4 4.5-9.5T464-513q-5-5-10-5t-10 5L313-382Zm327-62-55-55q-4-4-9-4t-9 4q-4 4-4 9.5t4 9.5l54 55-55 55q-4 4-3.5 9t4.5 9q4 4 9.5 4t9.5-4l54-54 55 55q4 4 9.5 3.5t9.5-4.5q4-4 4-9.5t-4-9.5l-55-54 55-55q4-4 4-9.5t-4-9.5q-4-4-9.5-4t-9.5 4l-55 55ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-336q0-14-9-23t-23-9H448l-71-71q-5-5-10.5-7t-11.5-2H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderW100.displayName = 'OnesyIconMaterialRuleFolderW100';

export default IconMaterialRuleFolderW100;
