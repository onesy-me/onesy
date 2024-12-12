import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffW100'

      short_name='CodeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 298-622 156-480l184 184-20 20-204-204 162-162-152-152 20-20 668 668-20 20Zm-76-228-20-20 106-106-184-184 20-20 204 204-126 126Z"/>
    </Icon>
  );
});

IconMaterialCodeOffW100.displayName = 'OnesyIconMaterialCodeOffW100';

export default IconMaterialCodeOffW100;
