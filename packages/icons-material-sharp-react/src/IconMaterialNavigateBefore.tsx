import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigateBefore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBefore'

      short_name='NavigateBefore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
    </Icon>
  );
});

IconMaterialNavigateBefore.displayName = 'OnesyIconMaterialNavigateBefore';

export default IconMaterialNavigateBefore;
