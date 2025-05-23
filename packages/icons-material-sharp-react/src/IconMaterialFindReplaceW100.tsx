import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFindReplaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceW100'

      short_name='FindReplace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-560q12-81 77.5-134.5T440-748q89 0 135.5 43t64.5 75v-118h28v188H480v-28h148q-17-45-63.5-88.5T440-720q-72 0-127 45.5T244-560h-28Zm568 406L590-348q-33 29-70.5 42.5T440-292q-59 0-115-31t-85-87v118h-28v-188h188v28H252q20 57 71.5 94.5T440-320q72 0 127-45.5T636-480h28q-5 36-18 60.5T610-368l194 194-20 20Z"/>
    </Icon>
  );
});

IconMaterialFindReplaceW100.displayName = 'OnesyIconMaterialFindReplaceW100';

export default IconMaterialFindReplaceW100;
