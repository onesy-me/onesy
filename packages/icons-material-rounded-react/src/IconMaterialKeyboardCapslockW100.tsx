import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardCapslockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockW100'

      short_name='KeyboardCapslock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-266q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h400q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H280Zm200-394L306-486q-4 4-9.5 4.5T286-486q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-486q-5 5-10 5t-10-5L480-660Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockW100.displayName = 'OnesyIconMaterialKeyboardCapslockW100';

export default IconMaterialKeyboardCapslockW100;
