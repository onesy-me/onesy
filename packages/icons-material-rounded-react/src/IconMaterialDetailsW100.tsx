import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetailsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsW100'

      short_name='Details'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M219-172q-17 0-25.5-15t-.5-30l261-469q8-16 26-16t26 16l261 469q8 15-.5 30T741-172H219Zm-3-28h250v-450L216-200Zm278 0h250L494-650v450Z"/>
    </Icon>
  );
});

IconMaterialDetailsW100.displayName = 'OnesyIconMaterialDetailsW100';

export default IconMaterialDetailsW100;
