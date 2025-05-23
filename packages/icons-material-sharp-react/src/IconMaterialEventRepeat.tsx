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
      <path d="M120-80v-720h120v-80h80v80h320v-80h80v80h120v320h-80v-80H200v400h280v80H120ZM760 0q-73 0-127.5-45.5T564-160h62q13 44 49.5 72T760-60q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T662-300h58v60H560v-160h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T960-200q0 83-58.5 141.5T760 0ZM200-640h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialEventRepeat.displayName = 'OnesyIconMaterialEventRepeat';

export default IconMaterialEventRepeat;
