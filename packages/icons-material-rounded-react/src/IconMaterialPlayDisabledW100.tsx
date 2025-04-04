import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledW100'

      short_name='PlayDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m596-438-20-20 36-22-203-145-26-26q7-6 16.5-7t18.5 5l206 147q14 9 13.5 25.5T623-455l-27 17Zm76 228L504-378l-86 55q-15 10-30.5 1T372-349v-161L208-674q-4-4-4.5-9.5T208-694q5-5 10-5t10 5l464 464q4 4 4.5 9.5T692-210q-5 5-10 5t-10-5ZM400-480Zm0 134 82-52-82-82v134Zm212-134Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledW100.displayName = 'OnesyIconMaterialPlayDisabledW100';

export default IconMaterialPlayDisabledW100;
