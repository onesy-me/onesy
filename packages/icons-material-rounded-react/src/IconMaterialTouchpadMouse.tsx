import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTouchpadMouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouse'

      short_name='TouchpadMouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-160q58 0 99-41t41-99v-60H520v60q0 58 41 99t99 41ZM521-440h99v-114q-38 11-65.5 42T521-440Zm179 0h99q-6-41-33.5-72T700-554v114ZM660-80q-92 0-156-64t-64-156v-120q0-92 64-156t156-64q92 0 156 64t64 156v120q0 92-64 156T660-80Zm-500-80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h680q17 0 28.5 11.5T880-760q0 17-11.5 28.5T840-720H160v480h161q17 0 28.5 11.5T361-200q0 17-11.5 28.5T321-160H160Zm0-80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouse.displayName = 'OnesyIconMaterialTouchpadMouse';

export default IconMaterialTouchpadMouse;
