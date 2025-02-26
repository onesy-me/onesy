import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPianoOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOffW100Filled'

      short_name='PianoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m784-136-38-38q-5 1-9 1.5t-9 .5H232q-25 0-42.5-17.5T172-232v-496q0-5 .5-9t1.5-9l-38-38q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm4-148-28-28v-416q0-14-9-23t-23-9h-69v332q0 3-.5 6.5T657-415L531-541v-219H429v117L284-788h444q25 0 42.5 17.5T788-728v444Zm-556 84h119v-196h-18q-14 0-23-9t-9-23v-191L200-720v488q0 14 9 23t23 9Zm147 0h202v-139L429-491q0 32-1.5 63.5T397-396h-18v196Zm230 0h111L609-311v111Z"/>
    </Icon>
  );
});

IconMaterialPianoOffW100Filled.displayName = 'OnesyIconMaterialPianoOffW100Filled';

export default IconMaterialPianoOffW100Filled;
