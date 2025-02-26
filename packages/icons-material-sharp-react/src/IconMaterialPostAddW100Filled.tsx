import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPostAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddW100Filled'

      short_name='PostAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-546v-28h268v28H320Zm0 120v-28h268v28H320Zm0 120v-28h268v28H320Zm386-346v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM146-172v-616h436v28H174v560h560v-408h28v436H146Z"/>
    </Icon>
  );
});

IconMaterialPostAddW100Filled.displayName = 'OnesyIconMaterialPostAddW100Filled';

export default IconMaterialPostAddW100Filled;
