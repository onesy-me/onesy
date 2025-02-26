import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabDuplicateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabDuplicateW100'

      short_name='TabDuplicate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M277-276v-552h551v552H277Zm28-28h495v-378H540v-118H305v496Zm0-496v496-496Zm-29 668v-40h40v40h-40ZM172-708h-40v-40h40v40Zm248 576v-40h40v40h-40Zm144 0v-40h40v40h-40Zm-432 0v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm576 392h40v40h-40v-40Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateW100.displayName = 'OnesyIconMaterialTabDuplicateW100';

export default IconMaterialTabDuplicateW100;
