import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOff'

      short_name='FolderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-640v351q0 20-12.5 30T840-249q-15 0-27.5-10.5T800-290v-350H467q-16 0-30.5-6T411-663l-68-68q-14-14-12.5-30t12.5-27q11-11 27-12.5t30 12.5l68 68h332q33 0 56.5 23.5T880-640ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h447L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q12 12 11.5 28T847-56q-12 11-28 11.5T791-56L687-160H160Zm208-320Zm209-17Z"/>
    </Icon>
  );
});

IconMaterialFolderOff.displayName = 'OnesyIconMaterialFolderOff';

export default IconMaterialFolderOff;
