import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkHighlighterMove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighterMove'

      short_name='InkHighlighterMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M551-800H320q-17 0-28.5-11.5T280-840q0-17 11.5-28.5T320-880h311l-80 80ZM391-640H200q-17 0-28.5-11.5T160-680q0-17 11.5-28.5T200-720h271l-80 80ZM231-480H80q-17 0-28.5-11.5T40-520q0-17 11.5-28.5T80-560h231l-80 80Zm353 80L480-504 280-304l104 104 200-200Zm-47-161 104 104 199-199-104-104-199 199Zm-84-28 216 216-229 229q-24 24-56 24t-56-24l-2-2-14 14q-6 6-13.5 9t-15.5 3H148q-14 0-19-12t5-22l92-92-2-2q-24-24-24-56t24-56l229-229Zm0 0 227-227q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L669-373 453-589Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterMove.displayName = 'OnesyIconMaterialInkHighlighterMove';

export default IconMaterialInkHighlighterMove;
