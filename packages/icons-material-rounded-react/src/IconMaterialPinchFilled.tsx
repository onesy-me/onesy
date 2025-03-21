import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchFilled'

      short_name='Pinch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-818 142-580h68q13 0 21.5 8.5T240-550q0 13-8.5 21.5T210-520H80q-17 0-28.5-11.5T40-560v-130q0-13 8.5-21.5T70-720q13 0 21.5 8.5T100-690v68l238-238h-68q-13 0-21.5-8.5T240-890q0-13 8.5-21.5T270-920h130q17 0 28.5 11.5T440-880v130q0 13-8.5 21.5T410-720q-13 0-21.5-8.5T380-750v-68ZM593-40q-24 0-46-9t-39-26L332-252q-12-12-11-29.5t13-29.5q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v280h40v-120q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v120h40v-80q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v80h40q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Z"/>
    </Icon>
  );
});

IconMaterialPinchFilled.displayName = 'OnesyIconMaterialPinchFilled';

export default IconMaterialPinchFilled;
