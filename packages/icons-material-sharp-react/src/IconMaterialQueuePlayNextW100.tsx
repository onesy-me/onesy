import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueuePlayNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextW100'

      short_name='QueuePlayNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-100-20-20 120-120-120-120 20-20 140 140-140 140Zm-408-72v-80H132v-536h696v308h-28v-280H160v480h520v28h-92v80H372Zm94-214h28v-120h120v-28H494v-120h-28v120H346v28h120v120ZM160-280v-480 480Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNextW100.displayName = 'OnesyIconMaterialQueuePlayNextW100';

export default IconMaterialQueuePlayNextW100;
