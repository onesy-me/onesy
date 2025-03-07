import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubscriptions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subscriptions'

      short_name='Subscriptions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm271-61 184-122q9-6 9-17t-9-17L431-499q-10-7-20.5-1.5T400-483v246q0 12 10.5 17.5T431-221ZM200-680q-17 0-28.5-11.5T160-720q0-17 11.5-28.5T200-760h560q17 0 28.5 11.5T800-720q0 17-11.5 28.5T760-680H200Zm120-120q-17 0-28.5-11.5T280-840q0-17 11.5-28.5T320-880h320q17 0 28.5 11.5T680-840q0 17-11.5 28.5T640-800H320ZM160-160v-400 400Z"/>
    </Icon>
  );
});

IconMaterialSubscriptions.displayName = 'OnesyIconMaterialSubscriptions';

export default IconMaterialSubscriptions;
