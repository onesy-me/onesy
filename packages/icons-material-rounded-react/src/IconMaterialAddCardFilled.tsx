import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardFilled'

      short_name='AddCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-200h-80q-17 0-28.5-11.5T640-240q0-17 11.5-28.5T680-280h80v-80q0-17 11.5-28.5T800-400q17 0 28.5 11.5T840-360v80h80q17 0 28.5 11.5T960-240q0 17-11.5 28.5T920-200h-80v80q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120v-80ZM160-480h640v-160H160v160Zm0 320q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480h-80q-83 0-141.5 58.5T560-280v80q0 17-11.5 28.5T520-160H160Z"/>
    </Icon>
  );
});

IconMaterialAddCardFilled.displayName = 'OnesyIconMaterialAddCardFilled';

export default IconMaterialAddCardFilled;
