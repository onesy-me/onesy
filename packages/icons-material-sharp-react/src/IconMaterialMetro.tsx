import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMetro = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Metro'

      short_name='Metro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h162l198 522 196-522h164v720H720v-490L531-120H429L240-607v487H120Z"/>
    </Icon>
  );
});

IconMaterialMetro.displayName = 'OnesyIconMaterialMetro';

export default IconMaterialMetro;
