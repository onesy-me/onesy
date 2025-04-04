import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAltOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOffW100Filled'

      short_name='FilterAltOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M555-518 325-748h382q9 0 13.5 8t-1.5 16L555-518Zm-47 106v172q0 12-8 20t-20 8q-12 0-20-8t-8-20v-228L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5L508-412Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOffW100Filled.displayName = 'OnesyIconMaterialFilterAltOffW100Filled';

export default IconMaterialFilterAltOffW100Filled;
