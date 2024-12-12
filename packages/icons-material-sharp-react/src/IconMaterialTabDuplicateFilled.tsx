import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabDuplicateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabDuplicateFilled'

      short_name='TabDuplicate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240Zm0 160v-80h80v80h-80Zm-80-640H80v-80h80v80ZM400-80v-80h80v80h-80Zm160 0v-80h80v80h-80ZM80-80v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm640 400h80v80h-80v-80ZM520-640h280v-160H520v160Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateFilled.displayName = 'OnesyIconMaterialTabDuplicateFilled';

export default IconMaterialTabDuplicateFilled;
