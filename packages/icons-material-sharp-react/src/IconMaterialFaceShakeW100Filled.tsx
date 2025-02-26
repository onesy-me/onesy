import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFaceShakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceShakeW100Filled'

      short_name='FaceShake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-92q-90 0-170.5-37T160-224v92h-28v-149h149v28H169q66 58 144 95.5T479-120q88 0 166.5-37.5T790-253H679v-28h149v149h-29v-92q-69 58-149.5 95T479-92Zm1.16-240Q368-332 290-409.84t-78-190Q212-712 289.84-790t190-78Q592-868 670-790.16t78 190Q748-488 670.16-410t-190 78Zm-.16-28q100 0 170-70t70-170q0-17.03-2.5-32.52Q715-648 710-664q-14 3-28.5 4.5T653-658q-69 2-130.5-27T417-767q-25 58-71 100.5T240-604v3q-1 100 69.5 170.5T480-360Zm-91.47-179Q376-539 367-547.68q-9-8.67-9-21.5 0-12.82 8.91-21.32 8.92-8.5 22.09-8.5 12.33 0 20.66 8.68 8.34 8.67 8.34 21.5 0 12.82-8.47 21.32-8.48 8.5-21 8.5Zm182.29 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialFaceShakeW100Filled.displayName = 'OnesyIconMaterialFaceShakeW100Filled';

export default IconMaterialFaceShakeW100Filled;
