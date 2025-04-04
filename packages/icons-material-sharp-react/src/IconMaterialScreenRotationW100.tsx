import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationW100'

      short_name='ScreenRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M561-201 199-563l198-198 362 362-198 198Zm0-40 158-158-322-322-158 158 322 322ZM480-52q-88 0-166-33.5t-136.5-92Q119-236 85.5-314T52-480h28q0 83 31.5 156T197-197q54 54 127 85.5T480-80L332-228l20-20L542-58q-16 2-31 4t-31 2Zm400-428q0-83-31.5-156T763-763q-54-54-127-85.5T480-880l148 148-20 20-190-190q15-3 30.5-4.5T480-908q89 0 166.5 33.5t136 92q58.5 58.5 92 136T908-480h-28Zm-401-1Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationW100.displayName = 'OnesyIconMaterialScreenRotationW100';

export default IconMaterialScreenRotationW100;
