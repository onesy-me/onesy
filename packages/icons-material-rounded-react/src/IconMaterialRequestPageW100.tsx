import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageW100'

      short_name='RequestPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-306v27q0 5 4 9t9 4q6 0 10.5-4.5T494-281v-25h66q6 0 10-4t4-10v-120q0-6-4-10t-10-4H414v-92h146q6 0 10-4t4-10q0-6-4-10t-10-4h-66v-27q0-5-4-9t-9-4q-6 0-10.5 4.5T466-599v25h-66q-6 0-10 4t-4 10v120q0 6 4 10t10 4h146v92H400q-6 0-10 4t-4 10q0 6 4 10t10 4h66ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h241q12 0 23.5 5t19.5 13l174 174q8 8 13 19.5t5 23.5v401q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22v-414L526-800H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10Zm-32 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialRequestPageW100.displayName = 'OnesyIconMaterialRequestPageW100';

export default IconMaterialRequestPageW100;
