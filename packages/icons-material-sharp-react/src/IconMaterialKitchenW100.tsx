import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKitchenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenW100'

      short_name='Kitchen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-640v-100h28v100h-28Zm0 314v-166h28v166h-28ZM212-132v-696h536v696H212Zm28-28h480v-392H240v392Zm0-420h480v-220H240v220Z"/>
    </Icon>
  );
});

IconMaterialKitchenW100.displayName = 'OnesyIconMaterialKitchenW100';

export default IconMaterialKitchenW100;
