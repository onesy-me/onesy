import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFileRenameOutline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileRenameOutline'

      short_name='DriveFileRenameOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 21 4-4h6q.825 0 1.413.587Q22 18.175 22 19q0 .825-.587 1.413Q20.825 21 20 21Zm-6-2h1.4l8.625-8.625-1.4-1.4L4 17.6ZM18.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM3 21q-.425 0-.712-.288Q2 20.425 2 20v-2.825q0-.2.075-.387.075-.188.225-.338l10.3-10.3 4.25 4.25-10.3 10.3q-.15.15-.337.225-.188.075-.388.075ZM13.325 9.675l-.7-.7 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialDriveFileRenameOutline.displayName = 'OnesyIconMaterialDriveFileRenameOutline';

export default IconMaterialDriveFileRenameOutline;
