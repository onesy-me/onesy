import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenFilled'

      short_name='FileOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-320h146q17 0 28.5 11.5T906-280q0 17-11.5 28.5T866-240h-50l90 90q11 11 11 27.5T906-94q-12 12-28.5 12T849-94l-89-89v49q0 17-11.5 28.5T720-94q-17 0-28.5-11.5T680-134v-146q0-17 11.5-28.5T720-320ZM520-800v160q0 17 11.5 28.5T560-600h160L520-800Zm-280-80h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v167q0 17-11.5 28.5T760-400H640q-17 0-28.5 11.5T600-360v240q0 17-11.5 28.5T560-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880Z"/>
    </Icon>
  );
});

IconMaterialFileOpenFilled.displayName = 'OnesyIconMaterialFileOpenFilled';

export default IconMaterialFileOpenFilled;
