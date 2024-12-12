import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4W100'

      short_name='Filter4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-136v-480 480Zm306-66h28v-348h-28v160H468v-160h-28v188h160v160Z"/>
    </Icon>
  );
});

IconMaterialFilter4W100.displayName = 'OnesyIconMaterialFilter4W100';

export default IconMaterialFilter4W100;
