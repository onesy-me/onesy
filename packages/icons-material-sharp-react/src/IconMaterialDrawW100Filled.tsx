import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrawW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawW100Filled'

      short_name='Draw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-79l549-549 79 79-549 549h-79Zm530-491 58-58-39-39-58 58 39 39Zm6 377q0-34-24.5-61T651-391l-22 22q43 14 67 35.5t24 47.5q0 37-44.5 61.5T560-200v28q75 0 131.5-30t56.5-84ZM237-417l20-21q-29-12-43-26t-14-30q0-21 24.5-40t85.5-45q73-31 101.5-56.5T440-694q0-41-33-67.5T316-788q-34 0-72.5 15.5T182-731l17 19q22-23 55-35.5t62-12.5q46 0 71 18.5t25 47.5q0 23-23 41.5T299-605q-72 32-99.5 56T172-494q0 23 16.5 42.5T237-417Z"/>
    </Icon>
  );
});

IconMaterialDrawW100Filled.displayName = 'OnesyIconMaterialDrawW100Filled';

export default IconMaterialDrawW100Filled;
