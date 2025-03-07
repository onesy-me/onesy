import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltFilled'

      short_name='KeyboardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-33 0-56.5-23.5T40-200v-520q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v520q0 33-23.5 56.5T840-120H120Zm220-160h280q8 0 14-6t6-14q0-8-6-14t-14-6H340q-8 0-14 6t-6 14q0 8 6 14t14 6ZM240-560q17 0 28.5-11.5T280-600q0-17-11.5-28.5T240-640q-17 0-28.5 11.5T200-600q0 17 11.5 28.5T240-560Zm160 0q17 0 28.5-11.5T440-600q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600q0 17 11.5 28.5T400-560Zm160 0q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600q0 17 11.5 28.5T560-560Zm160 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560ZM240-400q17 0 28.5-11.5T280-440q0-17-11.5-28.5T240-480q-17 0-28.5 11.5T200-440q0 17 11.5 28.5T240-400Zm160 0q17 0 28.5-11.5T440-440q0-17-11.5-28.5T400-480q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Zm160 0q17 0 28.5-11.5T600-440q0-17-11.5-28.5T560-480q-17 0-28.5 11.5T520-440q0 17 11.5 28.5T560-400Zm160 0q17 0 28.5-11.5T760-440q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440q0 17 11.5 28.5T720-400Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAltFilled.displayName = 'OnesyIconMaterialKeyboardAltFilled';

export default IconMaterialKeyboardAltFilled;
