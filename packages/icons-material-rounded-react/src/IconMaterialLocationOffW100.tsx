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
      <path d="M540-554q0-24.75-17.62-42.38Q504.75-614 480-614q-5 0-9.5.5T461-611l76 76q2-5 2.5-9.5t.5-9.5Zm156 178-21-21q24-42 37-80t13-70.23Q725-657 655.5-729 586-801 480-801q-44.73 0-83.86 14Q357-773 325-747l-19-19q35-29 79-45.5t95-16.5q116 0 194.5 80.5T753-547.3q0 38.3-14 81.3t-43 90Zm-83 69L259-661q-11 26-17.5 54t-6.5 60q0 75 67.5 179.5T480-169q38-33 71.5-68t61.5-70ZM480-147q-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-546.6q0-37.4 8.42-70.89T239-681L99-821q-4-3.73-4-8.87Q95-835 99.21-840q4.21-5 10-5t10.79 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L632-288q-17 20-40.5 46.5T512-159q-6.64 6-15.09 9-8.46 3-16.91 3Zm-44-337Zm64-88Z"/>
    </Icon>
  );
});

IconMaterialLocationOffW100.displayName = 'OnesyIconMaterialLocationOffW100';

export default IconMaterialLocationOffW100;
