import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSpecialFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialFilled'

      short_name='FolderSpecial'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm436-202 68 51q6 5 11.5 1t3.5-11l-25-85 70-56q5-5 3-11.5t-9-6.5h-86l-26-82q-2-7-10-7t-10 7l-26 82h-86q-7 0-9 6.5t3 11.5l70 56-25 85q-2 7 3.5 11t11.5-1l68-51Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialFilled.displayName = 'OnesyIconMaterialFolderSpecialFilled';

export default IconMaterialFolderSpecialFilled;
