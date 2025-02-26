import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLastPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageW100'

      short_name='LastPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-480 270-654q-4-4-4.5-9.5T270-674q5-5 10-5t10 5l173 173q5 5 7 10.13 2 5.14 2 11 0 5.87-2 10.87-2 5-7 10L290-286q-4 4-9.5 4.5T270-286q-5-5-5-10t5-10l174-174Zm236.04-214q5.96 0 9.96 4.03 4 4.02 4 9.97v400q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-400q0-5.95 4.04-9.97 4.03-4.03 10-4.03Z"/>
    </Icon>
  );
});

IconMaterialLastPageW100.displayName = 'OnesyIconMaterialLastPageW100';

export default IconMaterialLastPageW100;
