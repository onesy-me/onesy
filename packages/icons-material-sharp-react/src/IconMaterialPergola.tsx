import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPergola = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pergola'

      short_name='Pergola'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-760h80v80h560v-80h80v760h-80v-440H200v440h-80Zm80-520h560v-80H200v80Zm240 520v-120H320v-80h320v80H520v120h-80ZM200-640v-80 80Z"/>
    </Icon>
  );
});

IconMaterialPergola.displayName = 'OnesyIconMaterialPergola';

export default IconMaterialPergola;
