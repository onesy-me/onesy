import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewColumn2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumn2Filled'

      short_name='ViewColumn2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-120q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600Zm-400 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Z"/>
    </Icon>
  );
});

IconMaterialViewColumn2Filled.displayName = 'OnesyIconMaterialViewColumn2Filled';

export default IconMaterialViewColumn2Filled;
