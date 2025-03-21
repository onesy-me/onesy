import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropW100'

      short_name='Crop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-80v-146H286q-26 0-43-17t-17-43v-420H80q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h146v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v594q0 12 10 22t22 10h594q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H734v146q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Zm0-202v-392q0-12-10-22t-22-10H282v-28h392q26 0 43 17t17 43v392h-28Z"/>
    </Icon>
  );
});

IconMaterialCropW100.displayName = 'OnesyIconMaterialCropW100';

export default IconMaterialCropW100;
