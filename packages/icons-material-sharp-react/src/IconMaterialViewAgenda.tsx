import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewAgenda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgenda'

      short_name='ViewAgenda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h720v320H120Zm80-80h560v-160H200v160Zm-80-320v-320h720v320H120Zm80-80h560v-160H200v160Zm0 240v160-160Zm0-400v160-160Z"/>
    </Icon>
  );
});

IconMaterialViewAgenda.displayName = 'OnesyIconMaterialViewAgenda';

export default IconMaterialViewAgenda;
