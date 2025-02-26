import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRecord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRecord'

      short_name='ScreenRecord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Zm320-200q0-42-10-81t-29-74q-8-15-6.5-32t15.5-27q14-10 31-6t25 18q26 45 40 95.5T880-480q0 56-14.5 107T825-277q-8 14-24.5 17.5T770-266q-14-10-16-27t6-32q19-35 29.5-73.5T800-480ZM480-800q-43 0-81.5 10.5T325-760q-15 8-32 6t-27-16q-10-14-6.5-30.5T277-825q45-26 96-40.5T480-880q56 0 107 14.5t96 40.5q15 8 18.5 24.5T695-770q-10 14-27 16t-32-6q-35-19-74-29.5T480-800ZM160-480q0 43 10.5 81.5T200-325q8 15 6 32t-16 27q-14 10-30.5 6.5T135-277q-26-45-40.5-96T80-480q0-56 14-106.5t40-95.5q8-14 25-18t31 6q14 10 15.5 27t-6.5 32q-19 35-29 74t-10 81Zm320 320q42 0 81-10t74-29q15-8 31.5-6t26.5 16q10 14 6.5 30.5T682-134q-45 26-95.5 40T480-80q-56 0-106.5-14T278-134q-14-8-18-25t6-31q10-14 27-15.5t32 6.5q35 19 74 29t81 10Z"/>
    </Icon>
  );
});

IconMaterialScreenRecord.displayName = 'OnesyIconMaterialScreenRecord';

export default IconMaterialScreenRecord;
