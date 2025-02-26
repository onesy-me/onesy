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
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q0 17-11.5 28.5T840-520q-17 0-28.5-11.5T800-560v-80L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm320-360 320-200H160l320 200ZM160-240v-280 3-123 10-58q0-11 0 0v-32 32-.5 58.5-10 400ZM760-40q-83 0-141.5-58.5T560-240q0-83 58.5-141.5T760-440q83 0 141.5 58.5T960-240q0 83-58.5 141.5T760-40ZM660-220h200q8 0 14-6t6-14q0-8-6-14t-14-6H660q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribe.displayName = 'OnesyIconMaterialUnsubscribe';

export default IconMaterialUnsubscribe;
