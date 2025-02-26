import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter7W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7W100'

      short_name='Filter7'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-386h30l150-320v-28H440v28h158L448-386Zm-182 94v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-136v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFilter7W100.displayName = 'OnesyIconMaterialFilter7W100';

export default IconMaterialFilter7W100;
