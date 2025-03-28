import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Floor'

      short_name='Floor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-80h140v-180h180v-180h180v-180h180v-140h80v220H700v180H520v180H340v180H120Z"/>
    </Icon>
  );
});

IconMaterialFloor.displayName = 'OnesyIconMaterialFloor';

export default IconMaterialFloor;
