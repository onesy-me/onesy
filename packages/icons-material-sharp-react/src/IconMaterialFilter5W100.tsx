import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5W100'

      short_name='Filter5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-386h188v-188H468v-132h160v-28H440v188h160v132H440v28Zm-174 94v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-136v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFilter5W100.displayName = 'OnesyIconMaterialFilter5W100';

export default IconMaterialFilter5W100;
