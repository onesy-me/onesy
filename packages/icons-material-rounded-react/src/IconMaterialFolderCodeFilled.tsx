import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCodeFilled'

      short_name='FolderCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M612-85q-12 12-28.5 12T555-85l-87-87q-12-12-12-28t12-28l87-87q12-12 28.5-12t28.5 12q12 12 12 28t-12 28l-59 59 59 59q12 12 12 28t-12 28Zm136 0q-12-12-12-28t12-28l59-59-59-59q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l87 87q12 12 12 28t-12 28l-87 87q-12 12-28.5 12T748-85Zm-588-75q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v160q0 17-11.5 28.5T840-440H600q-100 0-170 70t-70 170q0 17-11.5 28.5T320-160H160Z"/>
    </Icon>
  );
});

IconMaterialFolderCodeFilled.displayName = 'OnesyIconMaterialFolderCodeFilled';

export default IconMaterialFolderCodeFilled;
