import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrokenImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageW100'

      short_name='BrokenImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm8-248 139-139q9-9 21-9t21 9l139 139 139-139q9-9 21-9t21 9l19 19v-188q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v268l40 40Zm-8 220h496q14 0 23-9t9-23v-268l-40-40-139 139q-9 9-21 9t-21-9L400-540 261-401q-9 9-21 9t-21-9l-19-19v188q0 14 9 23t23 9Zm-32 0v-300 28-288 560Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageW100.displayName = 'OnesyIconMaterialBrokenImageW100';

export default IconMaterialBrokenImageW100;
