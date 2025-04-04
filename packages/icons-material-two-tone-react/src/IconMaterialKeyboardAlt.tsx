import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAlt'

      short_name='KeyboardAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M3,19h18V6H3V19z M17,8h2v2h-2V8z M17,12h2v2h-2V12z M13,8h2v2h-2V8z M13,12h2 v2h-2V12z M9,8h2v2H9V8z M9,12h2v2H9V12z M8,16h8v1H8V16z M5,8h2v2H5V8z M5,12h2v2H5V12z" enableBackground="new" opacity=".3"/><path d="M21,4H3C1.9,4,1,4.9,1,6v13c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M21,19H3V6h18V19z"/><rect height="2" width="2" x="9" y="8"/><rect height="2" width="2" x="5" y="8"/><rect height="1" width="8" x="8" y="16"/><rect height="2" width="2" x="13" y="8"/><rect height="2" width="2" x="9" y="12"/><rect height="2" width="2" x="5" y="12"/><rect height="2" width="2" x="13" y="12"/><rect height="2" width="2" x="17" y="8"/><rect height="2" width="2" x="17" y="12"/></g></g>
    </Icon>
  );
});

IconMaterialKeyboardAlt.displayName = 'OnesyIconMaterialKeyboardAlt';

export default IconMaterialKeyboardAlt;
