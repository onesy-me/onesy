import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatasetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetW100'

      short_name='Dataset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Zm106-346h108v-108H306v108Zm240 0h108v-108H546v108ZM306-306h108v-108H306v108Zm240 0h108v-108H546v108Z"/>
    </Icon>
  );
});

IconMaterialDatasetW100.displayName = 'OnesyIconMaterialDatasetW100';

export default IconMaterialDatasetW100;
