import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCcwW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCcwW100'

      short_name='Rotate90DegreesCcw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-106q-45 0-88.5-9.5T349-148q-5-3-6.5-8.5T344-167q3-5 9-7t11 1q35 21 74.5 30t81.5 9q128 0 217-89t89-217q0-128-89.5-217T519-746h-70l80 80q4 4 4 9.5t-4 9.5q-4 4-9 4.5t-9-3.5l-93-93q-5-5-7-10t-2-11q0-6 2-11t7-10l92-93q4-4 9.5-4t9.5 4q4 4 4.5 9.5T530-855l-81 81h70q140 0 237.5 97T854-440q0 139-97.5 236.5T520-106ZM269-286q-6 0-11-2t-10-7L124-419q-5-5-7-10t-2-11q0-6 2-11t7-10l124-124q5-5 10-7t11-2q6 0 11 2t10 7l124 124q5 5 7 10t2 11q0 6-2 11t-7 10L290-295q-5 5-10 7t-11 2Zm0-28 126-126-126-126-126 126 126 126Zm0-126Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcwW100.displayName = 'OnesyIconMaterialRotate90DegreesCcwW100';

export default IconMaterialRotate90DegreesCcwW100;
