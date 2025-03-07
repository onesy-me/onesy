import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSupervisedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSupervisedW100Filled'

      short_name='FolderSupervised'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v41q0 14-11 21t-24 2q-21-8-44-12t-46-4q-110 0-182 76.5T449-305q0 15 1.5 29.5T456-247q3 14-4.5 24.5T431-212H192Zm402 0q-6 0-10-4t-4-10q0-23 32-38.5t92-15.5q60 0 92 15.5t32 38.5q0 6-4 10t-10 4H594Zm110-140q-23 0-38.5-15.5T650-406q0-23 15.5-38.5T704-460q23 0 38.5 15.5T758-406q0 23-15.5 38.5T704-352Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervisedW100Filled.displayName = 'OnesyIconMaterialFolderSupervisedW100Filled';

export default IconMaterialFolderSupervisedW100Filled;
