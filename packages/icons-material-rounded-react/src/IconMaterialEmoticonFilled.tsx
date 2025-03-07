import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmoticonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmoticonFilled'

      short_name='Emoticon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320-340q0 26-17.5 43T260-280Zm0-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320-620q0 26-17.5 43T260-560Zm180 120q-17 0-28.5-11.5T400-480q0-17 11.5-28.5T440-520h80q17 0 28.5 11.5T560-480q0 17-11.5 28.5T520-440h-80Zm240-40q0-54-14.5-104T623-676q-9-14-8-31t14-28q13-11 29-8.5t26 16.5q36 53 56 115.5T760-480q0 56-13.5 107T709-276q-8 15-24 19t-30-5q-14-9-17.5-25.5T642-319q18-37 28-77t10-84Z"/>
    </Icon>
  );
});

IconMaterialEmoticonFilled.displayName = 'OnesyIconMaterialEmoticonFilled';

export default IconMaterialEmoticonFilled;
