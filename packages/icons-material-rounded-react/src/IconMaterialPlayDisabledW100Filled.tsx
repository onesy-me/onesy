import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledW100Filled'

      short_name='PlayDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M596-438 383-651q7-6 16.5-7t18.5 5l206 147q14 9 13.5 25.5T623-455l-27 17Zm76 228L504-378l-86 55q-15 10-30.5 1T372-349v-161L208-674q-4-4-4.5-9.5T208-694q5-5 10-5t10 5l464 464q4 4 4.5 9.5T692-210q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledW100Filled.displayName = 'OnesyIconMaterialPlayDisabledW100Filled';

export default IconMaterialPlayDisabledW100Filled;
