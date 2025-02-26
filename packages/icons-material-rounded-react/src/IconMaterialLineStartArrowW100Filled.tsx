import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowW100Filled'

      short_name='LineStartArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-342 235-455q-14-8.79-14-24.89Q221-496 235-505l177-113q15-10 30.5-1.19T458-592v98h352q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H458v98q0 18.38-15.5 27.19Q427-332 412-342Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowW100Filled.displayName = 'OnesyIconMaterialLineStartArrowW100Filled';

export default IconMaterialLineStartArrowW100Filled;
