import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRvHookupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupW100Filled'

      short_name='RvHookup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-172q-35 0-61-22.5T260-252h-42q-39 0-66.5-27.5T124-346v-128q0-25 17.5-42.5T184-534h152v-120H138q-6 0-10-4t-4-10q0-6 4-10t10-4h422q26 0 43 17t17 43v342h202l-60-60q-4-4-4.5-9.5T762-360q5-5 10-5t10 5l73 73q9 9 9 21t-9 21l-73 73q-4 4-9.5 4.5T762-172q-5-5-5-10t5-10l60-60H444q-4 35-30.5 57.5T352-172Zm16-362h224v-88q0-12-10-22t-22-10H368v120Zm-16 334q27 0 46.5-19.5T418-266q0-27-19.5-46.5T352-332q-27 0-46.5 19.5T286-266q0 27 19.5 46.5T352-200Z"/>
    </Icon>
  );
});

IconMaterialRvHookupW100Filled.displayName = 'OnesyIconMaterialRvHookupW100Filled';

export default IconMaterialRvHookupW100Filled;
