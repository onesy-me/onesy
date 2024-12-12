import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1W100'

      short_name='Filter1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-386h28v-348H480v28h80v320Zm-294 94v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-136v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFilter1W100.displayName = 'OnesyIconMaterialFilter1W100';

export default IconMaterialFilter1W100;
