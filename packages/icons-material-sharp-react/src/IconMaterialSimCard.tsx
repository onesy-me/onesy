import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSimCard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCard'

      short_name='SimCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-200h80v-80h-80v80Zm0-160h80v-160h-80v160Zm160 160h80v-160h-80v160Zm0-240h80v-80h-80v80Zm160 240h80v-80h-80v80Zm0-160h80v-160h-80v160ZM160-80v-560l240-240h400v800H160Zm80-80h480v-640H434L240-606v446Zm0 0h480-480Z"/>
    </Icon>
  );
});

IconMaterialSimCard.displayName = 'OnesyIconMaterialSimCard';

export default IconMaterialSimCard;
