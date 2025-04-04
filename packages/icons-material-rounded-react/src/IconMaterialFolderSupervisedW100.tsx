import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSupervisedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSupervisedW100'

      short_name='FolderSupervised'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M594-212q-6 0-10-4t-4-10q0-23 32-38.5t92-15.5q60 0 92 15.5t32 38.5q0 6-4 10t-10 4H594Zm110-140q-23 0-38.5-15.5T650-406q0-23 15.5-38.5T704-460q23 0 38.5 15.5T758-406q0 23-15.5 38.5T704-352ZM160-240v-480 179-19 320Zm32 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v81q0 6-4 10t-10 4q-6 0-10-4t-4-10v-81q0-14-9-23t-23-9H448l-80-80H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h289q6 0 10 4t4 10q0 6-4 10t-10 4H192Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervisedW100.displayName = 'OnesyIconMaterialFolderSupervisedW100';

export default IconMaterialFolderSupervisedW100;
