import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnsubscribe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unsubscribe'

      short_name='Unsubscribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440 160-640v400h320q0 21 3 40.5t9 39.5H80v-640h800v308q-18-9-38.5-15t-41.5-9v-124L480-440Zm0-80 320-200H160l320 200ZM760-40q-83 0-141.5-58.5T560-240q0-83 58.5-141.5T760-440q83 0 141.5 58.5T960-240q0 83-58.5 141.5T760-40ZM640-220h240v-40H640v40Zm-480-20v-480 480Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribe.displayName = 'OnesyIconMaterialUnsubscribe';

export default IconMaterialUnsubscribe;
