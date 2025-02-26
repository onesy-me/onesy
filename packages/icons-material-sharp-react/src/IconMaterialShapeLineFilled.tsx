import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShapeLineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapeLineFilled'

      short_name='ShapeLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM560-40v-360h360v360H560Zm149-612L308-252q5 12 8.5 25t3.5 27q0 50-34.5 85T200-80q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q14 0 27 3.5t25 8.5l400-401q-5-12-8.5-24.5T640-760q0-51 35-85.5t85-34.5q51 0 85.5 34.5T880-760q0 50-34.5 85T760-640q-14 0-26.5-3.5T709-652Z"/>
    </Icon>
  );
});

IconMaterialShapeLineFilled.displayName = 'OnesyIconMaterialShapeLineFilled';

export default IconMaterialShapeLineFilled;
