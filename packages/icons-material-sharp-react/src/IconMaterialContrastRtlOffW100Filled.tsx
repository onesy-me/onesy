import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContrastRtlOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastRtlOffW100Filled'

      short_name='ContrastRtlOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 705-215q-46 39-103 61t-122 22q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-65 22-122t61-103L90-830l20-20L872-88l-20 20Zm-372-92q59 0 111-20t94-55L480-440v280Zm296-136-21-21q22-36 33.5-76.82Q800-434.64 800-480q0-133-93.5-226.5T480-800v208L296-776q40.15-24.8 86.56-38.4Q428.98-828 480-828q72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480q0 51.02-13.6 97.44Q800.8-336.15 776-296Z"/>
    </Icon>
  );
});

IconMaterialContrastRtlOffW100Filled.displayName = 'OnesyIconMaterialContrastRtlOffW100Filled';

export default IconMaterialContrastRtlOffW100Filled;
