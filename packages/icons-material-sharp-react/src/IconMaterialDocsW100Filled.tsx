import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDocsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsW100Filled'

      short_name='Docs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-476h280v-28H340v28Zm0 108h280v-28H340v28Zm0 108h160v-28H340v28ZM212-132v-696h374l162 162v534H212Zm360-520h148L572-800v148Z"/>
    </Icon>
  );
});

IconMaterialDocsW100Filled.displayName = 'OnesyIconMaterialDocsW100Filled';

export default IconMaterialDocsW100Filled;
