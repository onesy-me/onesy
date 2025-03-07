import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashlightOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffW100Filled'

      short_name='FlashlightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M345-192v-356L113-780q-4-4-4.5-9.5T113-800q5-5 10-5t10 5l658 658q4 4 4.5 9.5T791-122q-5 5-10 5t-10-5L561-332v140q0 25-17.5 42.5T501-132h-96q-25 0-42.5-17.5T345-192Zm-7-542q-12 0-23.5-5T295-752l-12-12q-17-17-3.5-40.5T325-828h256q25 0 42.5 17.5T641-768v4q0 13-8.5 21.5T611-734H338Zm177 202L379-668q-11-11-5-24.5t21-13.5h216q20 0 27 21.5t-7 43.5l-70 105q-8 12-22 13t-24-9Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffW100Filled.displayName = 'OnesyIconMaterialFlashlightOffW100Filled';

export default IconMaterialFlashlightOffW100Filled;
