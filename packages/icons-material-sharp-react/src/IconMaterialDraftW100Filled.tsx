import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftW100Filled'

      short_name='Draft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h374l162 162v534H212Zm360-520h148L572-800v148Z"/>
    </Icon>
  );
});

IconMaterialDraftW100Filled.displayName = 'OnesyIconMaterialDraftW100Filled';

export default IconMaterialDraftW100Filled;
