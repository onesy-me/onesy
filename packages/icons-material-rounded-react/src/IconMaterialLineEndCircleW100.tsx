import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndCircleW100'

      short_name='LineEndCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-350q53.63 0 91.81-38.19Q770-426.38 770-480q0-53.63-38.19-91.81Q693.63-610 640-610q-53.62 0-91.81 38.19Q510-533.63 510-480q0 53.62 38.19 91.81Q586.38-350 640-350Zm0 28q-63 0-107.5-41.5T483-466H150q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h333q5-61 49.5-102.5T640-638q65.83 0 111.92 46.12 46.08 46.12 46.08 112T751.92-368Q705.83-322 640-322Zm0-158Z"/>
    </Icon>
  );
});

IconMaterialLineEndCircleW100.displayName = 'OnesyIconMaterialLineEndCircleW100';

export default IconMaterialLineEndCircleW100;
