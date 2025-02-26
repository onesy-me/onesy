import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelvesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelvesW100Filled'

      short_name='Shelves'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-87v-785h28v85h560v-85h28v785h-28v-85H200v85h-28Zm28-433h112v-148h176v148h272v-239H200v239Zm0 320h272v-148h176v148h112v-292H200v292Z"/>
    </Icon>
  );
});

IconMaterialShelvesW100Filled.displayName = 'OnesyIconMaterialShelvesW100Filled';

export default IconMaterialShelvesW100Filled;
