import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalatorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorW100'

      short_name='Escalator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-286h122l200-360h106v-28H572L372-314H266v28Zm-94 114v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialEscalatorW100.displayName = 'OnesyIconMaterialEscalatorW100';

export default IconMaterialEscalatorW100;
