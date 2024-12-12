import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpecialCharacterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecialCharacterFilled'

      short_name='SpecialCharacter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-760q-92 0-156 64t-64 156q0 63 33 116t90 81q24 12 40.5 32.5T440-264v84q0 25-17.5 42.5T380-120H180q-25 0-42.5-17.5T120-180q0-25 17.5-42.5T180-240h140q-84-45-132-125t-48-175q0-142 99-241t241-99q142 0 241 99t99 241q0 95-48 175T640-240h140q25 0 42.5 17.5T840-180q0 25-17.5 42.5T780-120H580q-25 0-42.5-17.5T520-180v-84q0-26 16.5-46.5T577-343q57-28 90-81t33-116q0-92-64-156t-156-64Z"/>
    </Icon>
  );
});

IconMaterialSpecialCharacterFilled.displayName = 'OnesyIconMaterialSpecialCharacterFilled';

export default IconMaterialSpecialCharacterFilled;
