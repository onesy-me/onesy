import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteW100Filled'

      short_name='FolderDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t42.82-17h161.97q12.52 0 23.86 5Q389-738 397-730l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm374-88h100q18.33 0 31.17-12.83Q710-325.67 710-344v-188h16q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4h-76v-5q0-6-4.5-10.5T635-580h-38q-6 0-10.5 4.5T582-565v5h-76q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h16v188q0 18.33 12.83 31.17Q547.67-300 566-300Zm-16-232h132v188q0 7-4.5 11.5T666-328H566q-7 0-11.5-4.5T550-344v-188Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteW100Filled.displayName = 'OnesyIconMaterialFolderDeleteW100Filled';

export default IconMaterialFolderDeleteW100Filled;
