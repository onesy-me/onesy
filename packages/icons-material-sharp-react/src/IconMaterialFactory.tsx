import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Factory'

      short_name='Factory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-481l280-119v80l200-80v120h320v480H80Zm80-80h640v-320H480v-82l-200 80v-78l-120 53v347Zm280-80h80v-160h-80v160Zm-160 0h80v-160h-80v160Zm320 0h80v-160h-80v160Zm280-320H680l40-320h120l40 320ZM160-160h640-640Z"/>
    </Icon>
  );
});

IconMaterialFactory.displayName = 'OnesyIconMaterialFactory';

export default IconMaterialFactory;
