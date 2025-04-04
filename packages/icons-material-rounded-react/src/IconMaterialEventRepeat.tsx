import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventRepeat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventRepeat'

      short_name='EventRepeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v200q0 17-11.5 28.5T800-480q-17 0-28.5-11.5T760-520v-40H200v400h240q17 0 28.5 11.5T480-120q0 17-11.5 28.5T440-80H200ZM760 0q-64 0-114.5-35.5T573-128q-5-11 2.5-21.5T595-160q14 0 25.5 8.5T639-130q18 32 50 51t71 19q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T662-300h28q13 0 21.5 8.5T720-270q0 13-8.5 21.5T690-240h-90q-17 0-28.5-11.5T560-280v-90q0-13 8.5-21.5T590-400q13 0 21.5 8.5T620-370v27q27-26 63-41.5t77-15.5q83 0 141.5 58.5T960-200q0 83-58.5 141.5T760 0ZM200-640h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialEventRepeat.displayName = 'OnesyIconMaterialEventRepeat';

export default IconMaterialEventRepeat;
