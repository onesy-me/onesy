import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownW100'

      short_name='ThumbDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-372v-112l128-304h438v416L416-134l-23-23 43-215H92Zm538-388H239L120-479v79h350l-44 218 204-202v-376Zm0 376v-376 376Zm28 12v-28h142v-360H658v-28h170v416H658Z"/>
    </Icon>
  );
});

IconMaterialThumbDownW100.displayName = 'OnesyIconMaterialThumbDownW100';

export default IconMaterialThumbDownW100;
