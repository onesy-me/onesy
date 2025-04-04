import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffW100'

      short_name='LocationOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-554q0-24.75-17.62-42.38Q504.75-614 480-614q-5 0-9.5.5T461-611l76 76q2-5 2.5-9.5t.5-9.5Zm156 178-21-21q24-42 37-80t13-70.23Q725-657 655.5-729 586-801 480-801q-44.73 0-83.86 14Q357-773 325-747l-19-19q35-29 79-45.5t95-16.5q116 0 194.5 80.5T753-547.3q0 38.3-14 81.3t-43 90Zm-83 69L259-661q-11 26-17.5 54t-6.5 60q0 75 67.5 179.5T480-169q38-33 71.5-68t61.5-70ZM852-68 632-288q-31 38-68.5 76.5T480-131Q345-252 276-357t-69-190q0-36.97 8.42-70.47T239-681L90-830l19-21L872-88l-20 20ZM436-484Zm64-88Z"/>
    </Icon>
  );
});

IconMaterialLocationOffW100.displayName = 'OnesyIconMaterialLocationOffW100';

export default IconMaterialLocationOffW100;
