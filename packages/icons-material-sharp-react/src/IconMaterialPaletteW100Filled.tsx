import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaletteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaletteW100Filled'

      short_name='Palette'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-132q-71 0-134-27.5T234-234q-47-47-74.5-110.5T132-480q0-73 28-136.5T236.5-727q48.5-47 114-74T490-828q67 0 128 22.5T725.5-743q46.5 40 74.5 95.5T828-526q0 86-48.5 140T640-332h-70q-30 0-51 21t-21 51q0 29 15 45t15 37q0 23-13 34.5T478-132ZM260-466q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Zm120-160q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Zm200 0q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Zm120 160q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Z"/>
    </Icon>
  );
});

IconMaterialPaletteW100Filled.displayName = 'OnesyIconMaterialPaletteW100Filled';

export default IconMaterialPaletteW100Filled;
