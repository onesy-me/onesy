import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffFilled'

      short_name='FolderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M812-261 342-731q-19-19-8.5-44t37.5-25q8 0 15.5 3t13.5 9l68 68h332q33 0 56.5 23.5T880-640v350q0 27-24.5 37.5T812-261ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80H128l-72-72q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q12 12 11.5 28T847-56q-12 11-28 11.5T791-56L687-160H160Z"/>
    </Icon>
  );
});

IconMaterialFolderOffFilled.displayName = 'OnesyIconMaterialFolderOffFilled';

export default IconMaterialFolderOffFilled;
