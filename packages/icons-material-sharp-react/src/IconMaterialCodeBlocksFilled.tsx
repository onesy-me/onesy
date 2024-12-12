import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeBlocksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeBlocksFilled'

      short_name='CodeBlocks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialCodeBlocksFilled.displayName = 'OnesyIconMaterialCodeBlocksFilled';

export default IconMaterialCodeBlocksFilled;
