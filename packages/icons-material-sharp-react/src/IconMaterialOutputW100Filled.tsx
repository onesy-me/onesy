import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputW100Filled'

      short_name='Output'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v108h-28v-80H200v560h560v-80h28v108H172Zm493-145-19-19 128-130H380v-28h394L646-624l19-19 163 163-163 163Z"/>
    </Icon>
  );
});

IconMaterialOutputW100Filled.displayName = 'OnesyIconMaterialOutputW100Filled';

export default IconMaterialOutputW100Filled;
