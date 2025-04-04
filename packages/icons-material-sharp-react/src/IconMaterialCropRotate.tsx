import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropRotate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotate'

      short_name='CropRotate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480 0q-94 0-177.5-33.5t-148-93Q90-186 49-266.5T0-440h80q8 72 38.5 134.5t79 110.5Q246-147 309-117.5T444-82l-62-62 56-56L618-20Q584-9 549.5-4.5T480 0Zm120-200v-80H280v-320h-80v-80h80v-80h80v400h400v80h-80v80h-80Zm0-240v-160H440v-80h240v240h-80Zm280-80q-7-72-38-134.5T762.5-765Q714-813 651-842.5T516-878l62 62-56 56-180-180q34-11 68.5-15.5T480-960q94 0 177.5 33.5t148 93Q870-774 911-693.5T960-520h-80Z"/>
    </Icon>
  );
});

IconMaterialCropRotate.displayName = 'OnesyIconMaterialCropRotate';

export default IconMaterialCropRotate;
