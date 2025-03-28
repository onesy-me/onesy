import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolcano = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Volcano'

      short_name='Volcano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 160-360h120l80-200h280L880-80H80Zm123-80h571L660-560H494l-80 200H292l-89 200Zm317-600v-160h80v160h-80Zm181 75-56-56 113-113 57 56-114 113Zm-282 0L306-798l56-57 113 114-56 56Zm355 525H203h571Z"/>
    </Icon>
  );
});

IconMaterialVolcano.displayName = 'OnesyIconMaterialVolcano';

export default IconMaterialVolcano;
