import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedtimeOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOff'

      short_name='BedtimeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m806-235-57-57q17-16 31-34.5t25-38.5q-48-5-94-18t-88-35L416-625q-22-42-35-87.5T364-806q-20 11-38.5 25T291-750l-56-56q43-44 97.5-73T450-920q-18 99 11 193.5T561-561q71 71 165.5 100T920-450q-11 63-40.5 117.5T806-235ZM775-38 667-146q-34 13-69.5 19.5T524-120q-84 0-157.5-32t-128-86.5Q184-293 152-366.5T120-524q0-38 6.5-73.5T146-667L39-774l57-57L832-95l-57 57ZM524-200q20 0 40-2.5t39-7.5L210-603q-5 20-7.5 39.5T200-524q0 135 94.5 229.5T524-200ZM406-407Zm114-114Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOff.displayName = 'OnesyIconMaterialBedtimeOff';

export default IconMaterialBedtimeOff;
