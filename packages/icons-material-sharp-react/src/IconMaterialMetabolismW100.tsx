import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMetabolismW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MetabolismW100'

      short_name='Metabolism'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M406-288v-120h-50v-108q0-17 23.5-28.5T440-556q37 0 60.5 11.5T524-516v108h-50v120h-68Zm34-296q-18 0-31-13t-13-31q0-18 13-31t31-13q18 0 31 13t13 31q0 18-13 31t-31 13Zm0 412q-128 0-218-90t-90-218q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120v71l90-91 20 19-124 124-124-124 20-19 90 90v-70q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 117 81.5 198.5T440-200q56 0 102.5-19.5T629-274l21 20q-44 39-98 60.5T440-172Z"/>
    </Icon>
  );
});

IconMaterialMetabolismW100.displayName = 'OnesyIconMaterialMetabolismW100';

export default IconMaterialMetabolismW100;
