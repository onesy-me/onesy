import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCancelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCancelFilled'

      short_name='MobileCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m386-330 94-93 93 93 57-56-94-94 94-93-57-57-93 94-94-94-56 57 93 93-93 94 56 56ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
});

IconMaterialMobileCancelFilled.displayName = 'OnesyIconMaterialMobileCancelFilled';

export default IconMaterialMobileCancelFilled;
