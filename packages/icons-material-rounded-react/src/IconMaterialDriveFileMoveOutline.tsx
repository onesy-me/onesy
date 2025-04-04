import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFileMoveOutline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveOutline'

      short_name='DriveFileMoveOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.2 14-.925.925q-.275.275-.275.7 0 .425.275.7.275.275.7.275.425 0 .7-.275L15.3 13.7q.3-.3.3-.7 0-.4-.3-.7l-2.625-2.625q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7L12.2 12H9q-.425 0-.712.287Q8 12.575 8 13t.288.712Q8.575 14 9 14ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveOutline.displayName = 'OnesyIconMaterialDriveFileMoveOutline';

export default IconMaterialDriveFileMoveOutline;
