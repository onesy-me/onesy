import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenW100Filled'

      short_name='FileOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M878-102 734-246v127h-28v-175h175v28H753l144 144-19 20ZM572-652h148L572-800v148ZM212-132v-696h374l162 162v292H626v242H212Z"/>
    </Icon>
  );
});

IconMaterialFileOpenW100Filled.displayName = 'OnesyIconMaterialFileOpenW100Filled';

export default IconMaterialFileOpenW100Filled;
