import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToLeftW100'

      short_name='DockToLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-200h120v-560H640v560Zm-440 0h412v-560H200v560Zm440 0h120-120Zm-468 28v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDockToLeftW100.displayName = 'OnesyIconMaterialDockToLeftW100';

export default IconMaterialDockToLeftW100;
