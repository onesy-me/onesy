import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuietTime = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTime'

      short_name='QuietTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M524-40q-84 0-157.5-32t-128-86.5Q184-213 152-286.5T120-444q0-128 72-232t193-146q22-8 41 5.5t18 36.5q-3 85 27 162t90 137q60 60 137 90t162 27q26-1 38.5 17.5T903-305q-44 120-147.5 192.5T524-40Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T504-425q-61-61-97-138t-43-163q-77 43-120.5 118.5T200-444q0 135 94.5 229.5T524-120Zm-20-305Z"/>
    </Icon>
  );
});

IconMaterialQuietTime.displayName = 'OnesyIconMaterialQuietTime';

export default IconMaterialQuietTime;
