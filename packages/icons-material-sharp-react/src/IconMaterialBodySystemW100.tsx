import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBodySystemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodySystemW100'

      short_name='BodySystem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m350-266 83-382-132 54v87h-28v-106l170-72q14-6 25.5-7.5t22.5.5q11 2 19.5 8.5T526-666l24 38q42 67 78.5 97t85.5 35v28q-66-8-107.5-44T527-611l-36 127 83 98v120h-28v-105L439-484l-61 218h-28Zm189-473q-27 0-45.5-18.5T475-803q0-27 18.5-45.5T539-867q27 0 45.5 18.5T603-803q0 27-18.5 45.5T539-739Zm-59 607q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-103 53.5-186T325-792l12 25q-79 39-128 115.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227h28q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialBodySystemW100.displayName = 'OnesyIconMaterialBodySystemW100';

export default IconMaterialBodySystemW100;
