import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAltOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOffW100'

      short_name='FilterAltOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m555-518-20-20 143-182H353l-28-28h382q9 0 13.5 8t-1.5 16L555-518Zm-47 106v172q0 12-8 20t-20 8q-12 0-20-8t-8-20v-228L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5L508-412Zm27-126Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOffW100.displayName = 'OnesyIconMaterialFilterAltOffW100';

export default IconMaterialFilterAltOffW100;
