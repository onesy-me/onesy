import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabInactive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabInactive'

      short_name='TabInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-160H80v-160h80v80h80v-400h400v-80h-80v-80h160v160h160v640H240Zm80-80h480v-480H320v480Zm0 0v-480 480ZM80-480v-160h80v160H80Zm0-240v-160h160v80h-80v80H80Zm240-80v-80h160v80H320Z"/>
    </Icon>
  );
});

IconMaterialTabInactive.displayName = 'OnesyIconMaterialTabInactive';

export default IconMaterialTabInactive;
