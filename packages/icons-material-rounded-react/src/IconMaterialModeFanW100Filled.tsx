import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeFanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanW100Filled'

      short_name='ModeFan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-142q-35 0-53.5-21T358-210q0-18 7.5-35.5T390-274q23-16 38.5-43.5T452-379q-11-4-21.5-9.5T410-403l-94 34q-14 5-26.5 8t-25.5 3q-48 0-85-44t-37-128q0-35 20.5-53.5T209-602q19 0 36.5 7.5T274-570q16 23 43.5 38.5T379-508q4-11 9.5-21.5T403-550l-34-94q-5-13-8-26t-3-25q0-60 52.5-91.5T530-818q35 0 53.5 20.5T602-751q0 17-7.5 35T570-687q-23 16-38.5 44T508-581q12 5 22.5 10.5T550-557l94-35q14-5 26-7.5t25-2.5q62 0 92.5 53T818-430q0 35-22 53.5T747-358q-17 0-33.5-7.5T686-390q-16-23-43.5-38.5T581-452q-4 11-9.5 21T557-410l34 94q5 13 8 25t3 23q-1 48-44.5 87T430-142Zm50-262q32 0 54-22t22-54q0-32-22-54t-54-22q-32 0-54 22t-22 54q0 32 22 54t54 22Z"/>
    </Icon>
  );
});

IconMaterialModeFanW100Filled.displayName = 'OnesyIconMaterialModeFanW100Filled';

export default IconMaterialModeFanW100Filled;
