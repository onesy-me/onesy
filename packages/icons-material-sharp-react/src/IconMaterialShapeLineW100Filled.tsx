import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShapeLineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapeLineW100Filled'

      short_name='ShapeLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240.3-572q-61.3 0-104.8-43.26Q92-658.51 92-719.89 92-782 135.26-825q43.25-43 104.63-43Q302-868 345-825.17q43 42.84 43 104.87 0 61.3-42.83 104.8Q302.33-572 240.3-572ZM612-92v-256h256v256H612Zm71-571L297-278q5 8 8 17.75t3 20.25q0 28.33-19.48 48.17Q269.04-172 240.24-172 212-172 192-191.85q-20-19.86-20-48.22 0-28.93 19.83-48.43Q211.67-308 240-308q10.5 0 20.25 3t17.75 8l385-386q-5-8-8-17.29-3-9.3-3-19.71 0-28.9 19.85-48.45Q691.71-788 720.07-788q28.93 0 48.43 19.48t19.5 48.28Q788-692 768.45-672 748.9-652 720-652q-10.41 0-19.71-3-9.29-3-17.29-8Z"/>
    </Icon>
  );
});

IconMaterialShapeLineW100Filled.displayName = 'OnesyIconMaterialShapeLineW100Filled';

export default IconMaterialShapeLineW100Filled;
