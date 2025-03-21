import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageInfoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageInfoW100Filled'

      short_name='PageInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-212q-45.36 0-76.68-31.32Q592-274.64 592-320q0-45.36 31.32-76.68Q654.64-428 700-428q45.36 0 76.68 31.32Q808-365.36 808-320q0 45.36-31.32 76.68Q745.36-212 700-212Zm-222-94H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h252q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4ZM260-532q-45.36 0-76.68-31.32Q152-594.64 152-640q0-45.36 31.32-76.68Q214.64-748 260-748q45.36 0 76.68 31.32Q368-685.36 368-640q0 45.36-31.32 76.68Q305.36-532 260-532Zm474-94H482q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h252q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Z"/>
    </Icon>
  );
});

IconMaterialPageInfoW100Filled.displayName = 'OnesyIconMaterialPageInfoW100Filled';

export default IconMaterialPageInfoW100Filled;
