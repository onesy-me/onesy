import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInteractiveSpaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InteractiveSpaceW100Filled'

      short_name='InteractiveSpace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-631q5 5 10.5 5t10.5-5l39-39q5-5 5-11t-5-11l-39-39q-5-5-10.5-5t-10.5 5l-39 39q-5 5-5 11t5 11l39 39Zm390-35q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10ZM282-132q-13 0-21.5-8.5T252-162v-18q0-20 11-37.5t30-25.5q45-20 91.5-30.5T480-284q49 0 95.5 10.5T667-243q19 8 30 25.5t11 37.5v18q0 13-8.5 21.5T678-132H282Zm198-212q-37 0-62.5-25.5T392-432q0-37 25.5-62.5T480-520q37 0 62.5 25.5T568-432q0 37-25.5 62.5T480-344ZM132-768q0-26 17-43t43-17h576q26 0 43 17t17 43v296q0 26-17 43t-43 17h-93q-11 0-19-8.5t-8-19.5q-3-67-51.5-113.5T480-600q-68 0-116.5 46.5T312-440q0 11-8 19.5t-19 8.5h-93q-26 0-43-17t-17-43v-296Z"/>
    </Icon>
  );
});

IconMaterialInteractiveSpaceW100Filled.displayName = 'OnesyIconMaterialInteractiveSpaceW100Filled';

export default IconMaterialInteractiveSpaceW100Filled;
