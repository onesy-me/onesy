import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPausePresentationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationFilled'

      short_name='PausePresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-320q17 0 28.5-11.5T440-360v-240q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm160 0q17 0 28.5-11.5T600-360v-240q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v240q0 17 11.5 28.5T560-320ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationFilled.displayName = 'OnesyIconMaterialPausePresentationFilled';

export default IconMaterialPausePresentationFilled;
