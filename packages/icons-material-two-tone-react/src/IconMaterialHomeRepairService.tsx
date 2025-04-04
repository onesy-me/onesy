import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeRepairService = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairService'

      short_name='HomeRepairService'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M20,8h-3V6c0-1.1-0.9-2-2-2H9C7.9,4,7,4.9,7,6v2H4c-1.1,0-2,0.9-2,2v10h20V10C22,8.9,21.1,8,20,8z M9,6h6v2H9V6z M20,18 H4v-3h2v1h2v-1h8v1h2v-1h2V18z M20,13h-2v-1h-2v1H8v-1H6v1H4v-3h3h10h3V13z"/></g></g><g><g opacity=".3"><polygon points="18,16 16,16 16,15 8,15 8,16 6,16 6,15 4,15 4,18 20,18 20,15 18,15"/></g><g opacity=".3"><polygon points="4,10 4,13 6,13 6,12 8,12 8,13 16,13 16,12 18,12 18,13 20,13 20,10 17,10 7,10"/></g></g></g>
    </Icon>
  );
});

IconMaterialHomeRepairService.displayName = 'OnesyIconMaterialHomeRepairService';

export default IconMaterialHomeRepairService;
