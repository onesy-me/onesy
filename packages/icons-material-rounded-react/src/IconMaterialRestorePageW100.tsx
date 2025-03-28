import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestorePageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageW100'

      short_name='RestorePage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-514q15-23 43-39.5t63-16.5q54 0 92 38t38 92q0 54-38 92t-92 38q-40 0-71-21t-47-55q-2-5-7.5-8t-11.5-1q-6 2-8 7.5t0 10.5q20 45 59 70t86 25q66 0 112-46t46-112q0-66-46-112t-112-46q-44 0-75 20t-51 44v-56q0-6-4-10t-10-4q-6 0-10 4t-4 10v81q0 9 7 16t16 7h81q6 0 10-4t4-10q0-6-4-10t-10-4h-56ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h241q12 0 23.5 5t19.5 13l174 174q8 8 13 19.5t5 23.5v401q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22v-414L526-800H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10Zm-32 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialRestorePageW100.displayName = 'OnesyIconMaterialRestorePageW100';

export default IconMaterialRestorePageW100;
