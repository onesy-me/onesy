import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPianoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoW100'

      short_name='Piano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h151v-196h-50v-364H200v560Zm409 0h151v-560H659v364h-50v196Zm-230 0h202v-196h-50v-364H429v364h-50v196Z"/>
    </Icon>
  );
});

IconMaterialPianoW100.displayName = 'OnesyIconMaterialPianoW100';

export default IconMaterialPianoW100;
