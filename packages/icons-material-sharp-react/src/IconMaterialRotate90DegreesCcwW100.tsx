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
      <path d="M509-132q-40.73 0-79.87-11Q390-154 355-174l20-20q31 17 65 25.5t69 8.5q117 0 198.5-81.5T789-440q0-117-81.5-198.5T509-720h-66l86 86-20 24-124-124 124-124 20 24-86 86h66q128.33 0 218.17 89.79Q817-568.41 817-440.14 817-376 793-320t-66 98q-42 42-97.96 66-55.96 24-120.04 24ZM269-274 103-440l166-166 166 166-166 166Zm0-40 126-126-126-126-126 126 126 126Zm0-126Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcwW100.displayName = 'OnesyIconMaterialRotate90DegreesCcwW100';

export default IconMaterialRotate90DegreesCcwW100;
