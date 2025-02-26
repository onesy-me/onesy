import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnimationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnimationW100Filled'

      short_name='Animation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-132q-48 0-89-18t-72-49q-31-31-49-72t-18-89q0-68 36.5-125.5T270-570q18-42 48.5-72.5T390-690q27-63 82.5-100.5T600-828q48 0 89 18t72 49q31 31 49 72t18 89q0 71-36 126t-102 84q-18 42-48 72t-72 48q-27 63-82.5 100.5T360-132Zm2-28q48 0 97-25t75-73q-62 14-117.5-4.5T321-320q-40-40-58.5-95T258-532q-47 27-72.5 74.5T160-360q0 42 16 78.5t43 63.5q28 27 64.5 42.5T362-160Zm118-120q65 0 109.5-31t64.5-67q-62 14-117.5-4.5T441-440q-40-40-58.5-95T378-652q-39 23-67.5 68T282-480q0 42 15.5 78t42.5 63q27 28 62.5 43.5T480-280Zm122-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T623-621q-38-38-93.5-53.5T414-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm102-28q44-26 70-67.5T800-600q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-56 0-99.5 26.5T428-702q62-14 117.5 4.5T641-640q40 40 58.5 95t4.5 117Z"/>
    </Icon>
  );
});

IconMaterialAnimationW100Filled.displayName = 'OnesyIconMaterialAnimationW100Filled';

export default IconMaterialAnimationW100Filled;
