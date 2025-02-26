import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorW100'

      short_name='Floor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-106v-28h140v-180h180v-180h180v-180h180v-140h28v168H674v180H494v180H314v180H146Z"/>
    </Icon>
  );
});

IconMaterialFloorW100.displayName = 'OnesyIconMaterialFloorW100';

export default IconMaterialFloorW100;
