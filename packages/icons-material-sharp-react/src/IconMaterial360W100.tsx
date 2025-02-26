import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial360W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360W100'

      short_name='360'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m336-226-20-20 90-90q-113-15-193.5-54.5T132-480q0-59 101.5-103.5T480-628q145 0 246.5 44.5T828-480q0 38-51 74t-137 56v-28q77-20 118.5-49.5T800-480q0-35-85.5-77.5T480-600q-149 0-234.5 42.5T160-480q0 30 71 66t175 50l-90-90 20-20 124 124-124 124Z"/>
    </Icon>
  );
});

IconMaterial360W100.displayName = 'OnesyIconMaterial360W100';

export default IconMaterial360W100;
