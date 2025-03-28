import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCcw = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCcw'

      short_name='Rotate90DegreesCcw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-80q-51 0-100-14t-92-42l58-58q31 17 65 25.5t69 8.5q117 0 198.5-81.5T800-440q0-117-81.5-198.5T520-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q150 0 255 105t105 255q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T520-80ZM280-200 40-440l240-240 240 240-240 240Zm0-114 126-126-126-126-126 126 126 126Zm0-126Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcw.displayName = 'OnesyIconMaterialRotate90DegreesCcw';

export default IconMaterialRotate90DegreesCcw;
