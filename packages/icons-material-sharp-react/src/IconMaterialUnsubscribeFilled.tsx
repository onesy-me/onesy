import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnsubscribeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeFilled'

      short_name='Unsubscribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-440 320-200v-80L480-520 160-720v80l320 200ZM760-40q-83 0-141.5-58.5T560-240q0-83 58.5-141.5T760-440q83 0 141.5 58.5T960-240q0 83-58.5 141.5T760-40ZM640-220h240v-40H640v40ZM80-160v-640h800v308q-28-14-58-21t-62-7q-117 0-198.5 81.5T480-240q0 20 3 40t9 40H80Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeFilled.displayName = 'OnesyIconMaterialUnsubscribeFilled';

export default IconMaterialUnsubscribeFilled;
