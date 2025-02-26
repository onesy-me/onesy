import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExclamation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Exclamation'

      short_name='Exclamation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400q-17 0-28.5-11.5T440-440v-280q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v280q0 17-11.5 28.5T480-400Zm0 200q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240q0 17-11.5 28.5T480-200Z"/>
    </Icon>
  );
});

IconMaterialExclamation.displayName = 'OnesyIconMaterialExclamation';

export default IconMaterialExclamation;
