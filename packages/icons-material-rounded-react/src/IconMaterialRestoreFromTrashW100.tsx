import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestoreFromTrashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashW100'

      short_name='RestoreFromTrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-172q-25 0-42.5-17.5T252-232v-488h-26q-6 0-10-4t-4-10q0-6 4-10t10-4h134q0-11 8.5-19.5T388-776h184q11 0 19.5 8.5T600-748h134q6 0 10 4t4 10q0 6-4 10t-10 4h-26v488q0 25-17.5 42.5T648-172H312Zm368-548H280v488q0 14 9 23t23 9h336q14 0 23-9t9-23v-488Zm-400 0v520-520Zm186 170v180q0 6 4 10t10 4q6 0 10-4t4-10v-180l80 80q4 4 9.5 4.5T594-470q5-5 5-10t-5-10l-93-93q-9-9-21-9t-21 9l-93 93q-4 4-4.5 9.5T366-470q5 5 10 5t10-5l80-80Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashW100.displayName = 'OnesyIconMaterialRestoreFromTrashW100';

export default IconMaterialRestoreFromTrashW100;
