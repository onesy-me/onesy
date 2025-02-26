import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaWideAngleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleFilled'

      short_name='PanoramaWideAngle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-91 0-181.5-8.5T120-200q-21-69-30.5-138.5T80-480q0-72 9.5-141.5T120-760q79-20 168-30t192-10q103 0 192 10t168 30q21 69 30.5 138.5T880-480q0 72-10 141.5T840-200q-88 23-178.5 31.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleFilled.displayName = 'OnesyIconMaterialPanoramaWideAngleFilled';

export default IconMaterialPanoramaWideAngleFilled;
