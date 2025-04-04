import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexNoWrapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexNoWrapW100'

      short_name='FlexNoWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-347v-266q0-12.75 8.63-21.38Q109.25-643 122-643h116q12.75 0 21.38 8.62Q268-625.75 268-613v266q0 12.75-8.62 21.37Q250.75-317 238-317H122q-12.75 0-21.37-8.63Q92-334.25 92-347Zm300 0v-266q0-12.75 8.63-21.38Q409.25-643 422-643h116q12.75 0 21.38 8.62Q568-625.75 568-613v266q0 12.75-8.62 21.37Q550.75-317 538-317H422q-12.75 0-21.37-8.63Q392-334.25 392-347Zm300 0v-266q0-12.75 8.63-21.38Q709.25-643 722-643h116q12.75 0 21.38 8.62Q868-625.75 868-613v266q0 12.75-8.62 21.37Q850.75-317 838-317H722q-12.75 0-21.37-8.63Q692-334.25 692-347Zm-572 2h120v-270H120v270Zm610 0h110v-270H730v270Z"/>
    </Icon>
  );
});

IconMaterialFlexNoWrapW100.displayName = 'OnesyIconMaterialFlexNoWrapW100';

export default IconMaterialFlexNoWrapW100;
