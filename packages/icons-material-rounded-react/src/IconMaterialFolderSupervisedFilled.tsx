import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSupervisedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSupervisedFilled'

      short_name='FolderSupervised'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v76q0 18-15.5 27t-32.5 1q-26-12-55-18t-58-6q-118 0-198.5 82.5T440-281q0 19 2.5 37.5T450-207q5 18-5 32.5T418-160H160Zm440 0q-17 0-28.5-11.5T560-200q0-31 44-55.5T720-280q72 0 116 24.5t44 55.5q0 17-11.5 28.5T840-160H600Zm120-160q-33 0-56.5-23.5T640-400q0-33 23.5-56.5T720-480q33 0 56.5 23.5T800-400q0 33-23.5 56.5T720-320Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervisedFilled.displayName = 'OnesyIconMaterialFolderSupervisedFilled';

export default IconMaterialFolderSupervisedFilled;
