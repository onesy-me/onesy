import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMyLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MyLocationW100'

      short_name='MyLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-120v-52q-125-11-204-90t-90-204h-52v-28h52q11-125 90-204t204-90v-52h28v52q125 11 204 90t90 204h52v28h-52q-11 125-90 204t-204 90v52h-28Zm14-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-172q-44.55 0-76.27-31.73Q372-435.45 372-480t31.73-76.28Q435.45-588 480-588t76.28 31.72Q588-524.55 588-480t-31.72 76.27Q524.55-372 480-372Zm0-28q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialMyLocationW100.displayName = 'OnesyIconMaterialMyLocationW100';

export default IconMaterialMyLocationW100;
