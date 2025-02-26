import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3W100'

      short_name='Man3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-96v-257.6h-68V-648h272v294h-68v258H412Zm68-614-74-74 74-74 74 74-74 74Z"/>
    </Icon>
  );
});

IconMaterialMan3W100.displayName = 'OnesyIconMaterialMan3W100';

export default IconMaterialMan3W100;
