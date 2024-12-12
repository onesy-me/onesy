import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Store'

      short_name='Store'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z"/>
    </Icon>
  );
});

IconMaterialStore.displayName = 'OnesyIconMaterialStore';

export default IconMaterialStore;
