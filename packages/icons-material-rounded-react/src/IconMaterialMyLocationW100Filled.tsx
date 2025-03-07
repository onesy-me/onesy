import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMyLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MyLocationW100Filled'

      short_name='MyLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-134v-38q-125-11-204-90t-90-204h-38q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h38q11-125 90-204t204-90v-38q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v38q125 11 204 90t90 204h38q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-38q-11 125-90 204t-204 90v38q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Zm14-66q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-172q-44.55 0-76.27-31.73Q372-435.45 372-480t31.73-76.28Q435.45-588 480-588t76.28 31.72Q588-524.55 588-480t-31.72 76.27Q524.55-372 480-372Z"/>
    </Icon>
  );
});

IconMaterialMyLocationW100Filled.displayName = 'OnesyIconMaterialMyLocationW100Filled';

export default IconMaterialMyLocationW100Filled;
