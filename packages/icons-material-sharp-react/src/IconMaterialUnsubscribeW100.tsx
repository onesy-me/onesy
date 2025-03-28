import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnsubscribeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeW100'

      short_name='Unsubscribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-486 160-697v425q0 14 9 23t23 9h340v14q0 6 2 14H132v-536h696v290q-5-2-12.5-3.5T800-465v-232L480-486Zm0-34 304-200H176l304 200ZM760-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T760-92Zm-86-134h172v-28H674v28Zm-514-14v-228 3-255 480Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeW100.displayName = 'OnesyIconMaterialUnsubscribeW100';

export default IconMaterialUnsubscribeW100;
