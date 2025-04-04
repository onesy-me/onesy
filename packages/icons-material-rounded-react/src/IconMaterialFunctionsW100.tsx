import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFunctionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsW100'

      short_name='Functions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M531-480 294-727q-2-2-2-3.67v-8.55q0-3.78 2.59-6.28 2.58-2.5 6.41-2.5h353q5.83 0 9.92 4.12 4.08 4.12 4.08 10t-4.08 10.38q-4.09 4.5-9.92 4.5H344l208 218q8 8.61 8 20.8 0 12.2-8 21.2L344-240h310q5.83 0 9.92 4.12 4.08 4.12 4.08 10t-4.08 9.88q-4.09 4-9.92 4H298q-2.48 0-4.24-1.76Q292-215.52 292-218v-10.36q0-1.64.44-2.33.45-.69 1.56-1.31l237-248Z"/>
    </Icon>
  );
});

IconMaterialFunctionsW100.displayName = 'OnesyIconMaterialFunctionsW100';

export default IconMaterialFunctionsW100;
