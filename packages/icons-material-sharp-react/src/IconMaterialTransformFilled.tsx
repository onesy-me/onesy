import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransformFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformFilled'

      short_name='Transform'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-40 480-200l56-58 64 64v-86H360q-33 0-56.5-23.5T280-360v-240H80v-80h200v-86l-64 64-56-58 160-160 160 160-56 58-64-64v406h520v80H680v86l64-64 56 58L640-40Zm-40-400v-160H440v-80h160q33 0 56.5 23.5T680-600v160h-80Z"/>
    </Icon>
  );
});

IconMaterialTransformFilled.displayName = 'OnesyIconMaterialTransformFilled';

export default IconMaterialTransformFilled;
