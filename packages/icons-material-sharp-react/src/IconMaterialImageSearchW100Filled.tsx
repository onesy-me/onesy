import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchW100Filled'

      short_name='ImageSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h228v28H200v560h560v-248l28 28v248H172Zm146-134 66-86 64 74 100-124 102 136H318Zm530-166L722-598q-20 15-37.5 20.5T644-572q-54 0-91-37t-37-91q0-54 37-91t91-37q54 0 91 37t37 91q0 23-7 43.5T744-616l124 124-20 20ZM644-600q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialImageSearchW100Filled.displayName = 'OnesyIconMaterialImageSearchW100Filled';

export default IconMaterialImageSearchW100Filled;
