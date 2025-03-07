import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatasetLinkedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetLinkedW100'

      short_name='DatasetLinked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-212v-616h616v320h-28v-292H200v560h142q2 8 4 14.5t4 13.5H172Zm28-68v40-560 520Zm106-66h41q11-32 28-59.5t40-48.5H306v108Zm0-240h108v-108H306v108Zm254 414q-44.55 0-76.27-31.73Q452-235.45 452-280t31.73-76.27Q515.45-388 560-388h70v28h-70q-33 0-56.5 23.5T480-280q0 33 23.5 56.5T560-200h70v28h-70Zm-14-414h108v-108H546v108Zm14 320v-28h240v28H560Zm170 94v-28h70q33 0 56.5-23.5T880-280q0-33-23.5-56.5T800-360h-70v-28h70q44.55 0 76.28 31.48Q908-325.04 908-279.68q0 44.68-31.72 76.18Q844.55-172 800-172h-70Z"/>
    </Icon>
  );
});

IconMaterialDatasetLinkedW100.displayName = 'OnesyIconMaterialDatasetLinkedW100';

export default IconMaterialDatasetLinkedW100;
