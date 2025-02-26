import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchZoomOutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomOutFilled'

      short_name='PinchZoomOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M142-540h68q13 0 21.5 8.5T240-510q0 13-8.5 21.5T210-480H80q-17 0-28.5-11.5T40-520v-130q0-13 8.5-21.5T70-680q13 0 21.5 8.5T100-650v68l98-98q9-9 21-9t21 9q9 9 9 21t-9 21l-98 98Zm278-278-98 98q-9 9-21 9t-21-9q-9-9-9-21t9-21l98-98h-68q-13 0-21.5-8.5T280-890q0-13 8.5-21.5T310-920h130q17 0 28.5 11.5T480-880v130q0 13-8.5 21.5T450-720q-13 0-21.5-8.5T420-750v-68ZM593-40q-24 0-46-9t-39-26L332-252q-12-12-11-29.5t13-29.5q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v280h40v-120q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v120h40v-80q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v80h40q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomOutFilled.displayName = 'OnesyIconMaterialPinchZoomOutFilled';

export default IconMaterialPinchZoomOutFilled;
