import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropRotateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotateW100'

      short_name='CropRotate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-52q-83 0-157.5-29.5T192-163q-58-52-95-123T52-440h28q8 77 42.5 143T211-183q54 48 123.5 75.5T482-80l-82-82 20-20L546-56q-16 3-32 3.5t-32 .5Zm118-200v-80H332v-268h-80v-28h80v-80h28v348h400v28H628v80h-28Zm0-136v-212H388v-28h240v240h-28Zm280-132q-8-77-42.5-143T749-777q-54-48-123.5-75.5T478-880l82 82-20 20-126-126q16-3 32-3.5t32-.5q83 0 157.5 29.5T768-797q58 52 95 123t45 154h-28Z"/>
    </Icon>
  );
});

IconMaterialCropRotateW100.displayName = 'OnesyIconMaterialCropRotateW100';

export default IconMaterialCropRotateW100;
