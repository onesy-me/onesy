import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpenW100'

      short_name='RightPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M465-363v-234L347-480l118 117Zm175 163h120v-560H640v560Zm-440 0h412v-560H200v560Zm440 0h120-120Zm-468 28v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpenW100.displayName = 'OnesyIconMaterialRightPanelOpenW100';

export default IconMaterialRightPanelOpenW100;
