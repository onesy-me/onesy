import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestoreFromTrashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashW100Filled'

      short_name='RestoreFromTrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-172q-24.75 0-42.37-17.63Q252-207.25 252-232v-488h-26q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h134q0-11 8.5-19.5T388-776h184q11 0 19.5 8.5T600-748h134q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-26v488q0 24.75-17.62 42.37Q672.75-172 648-172H312Zm154-378v180q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-180l80 80q4 4 9.5 4.5t10.72-4.72Q599-475 599-480q0-5-5-10l-93-93q-9-9-21-9t-21 9l-93 93q-4 4-4.5 9.5t4.72 10.72Q371-465 376-465q5 0 10-5l80-80Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashW100Filled.displayName = 'OnesyIconMaterialRestoreFromTrashW100Filled';

export default IconMaterialRestoreFromTrashW100Filled;
