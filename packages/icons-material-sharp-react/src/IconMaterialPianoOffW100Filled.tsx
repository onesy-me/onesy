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
      <path d="m794-126-46-46H172v-576l-46-46 20-20 668 668-20 20Zm-6-158-28-28v-448H659v347L531-541v-219H429v117L284-788h504v504Zm-588 84h151v-196h-50v-223L200-720v520Zm179 0h202v-139L429-491l6 95h-56v196Zm230 0h111L609-311v111Z"/>
    </Icon>
  );
});

IconMaterialPianoOffW100Filled.displayName = 'OnesyIconMaterialPianoOffW100Filled';

export default IconMaterialPianoOffW100Filled;
