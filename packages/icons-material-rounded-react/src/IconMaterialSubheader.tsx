import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubheader = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subheader'

      short_name='Subheader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm100 200h240q25 0 42.5-17.5T600-620q0-25-17.5-42.5T540-680H300q-25 0-42.5 17.5T240-620q0 25 17.5 42.5T300-560Z"/>
    </Icon>
  );
});

IconMaterialSubheader.displayName = 'OnesyIconMaterialSubheader';

export default IconMaterialSubheader;
