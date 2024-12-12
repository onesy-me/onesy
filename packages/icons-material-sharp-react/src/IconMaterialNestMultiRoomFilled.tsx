import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestMultiRoomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoomFilled'

      short_name='NestMultiRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-600 320-240 320 240H160Zm0 480v-160h360v160H160Zm440 0v-160h200v160H600ZM160-360v-160h200v160H160Zm280 0v-160h360v160H440Z"/>
    </Icon>
  );
});

IconMaterialNestMultiRoomFilled.displayName = 'OnesyIconMaterialNestMultiRoomFilled';

export default IconMaterialNestMultiRoomFilled;
