import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewModule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModule'

      short_name='ViewModule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M627-520h133v-160H627v160Zm-214 0h133v-160H413v160Zm-213 0h133v-160H200v160Zm0 240h133v-160H200v160Zm213 0h133v-160H413v160Zm214 0h133v-160H627v160Zm-507 80v-560h720v560H120Z"/>
    </Icon>
  );
});

IconMaterialViewModule.displayName = 'OnesyIconMaterialViewModule';

export default IconMaterialViewModule;
