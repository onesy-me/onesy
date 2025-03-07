import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackpackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackW100'

      short_name='Backpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-487.27Q212-668 246-705q34-37 86-42v-81h68v80h160v-80h68v81q52 5 86 41.9t34 86.1v487H212Zm28-28h480v-459q0-41.66-31.14-71.33T614-720H346q-43.73 0-74.86 29.67Q240-660.66 240-619v459Zm372-182h28v-104H320v28h292v76Zm-132-98Z"/>
    </Icon>
  );
});

IconMaterialBackpackW100.displayName = 'OnesyIconMaterialBackpackW100';

export default IconMaterialBackpackW100;
