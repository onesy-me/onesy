import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSearchCheck2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchCheck2Filled'

      short_name='SearchCheck2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m358-418 226-227-57-57-169 170-85-84-57 56 142 142Zm42 178q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 105.5T653-364l227 228-56 56-228-227q-41 32-90.5 49.5T400-240Z"/>
    </Icon>
  );
});

IconMaterialSearchCheck2Filled.displayName = 'OnesyIconMaterialSearchCheck2Filled';

export default IconMaterialSearchCheck2Filled;
