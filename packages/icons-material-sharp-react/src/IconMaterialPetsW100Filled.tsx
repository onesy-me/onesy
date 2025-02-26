import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPetsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PetsW100Filled'

      short_name='Pets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180.06-501q-31.06 0-52.56-21.44-21.5-21.45-21.5-52.5 0-31.06 21.44-52.56 21.45-21.5 52.5-21.5 31.06 0 52.56 21.44 21.5 21.45 21.5 52.5 0 31.06-21.44 52.56-21.45 21.5-52.5 21.5Zm180-160q-31.06 0-52.56-21.44-21.5-21.45-21.5-52.5 0-31.06 21.44-52.56 21.45-21.5 52.5-21.5 31.06 0 52.56 21.44 21.5 21.45 21.5 52.5 0 31.06-21.44 52.56-21.45 21.5-52.5 21.5Zm240 0q-31.06 0-52.56-21.44-21.5-21.45-21.5-52.5 0-31.06 21.44-52.56 21.45-21.5 52.5-21.5 31.06 0 52.56 21.44 21.5 21.45 21.5 52.5 0 31.06-21.44 52.56-21.45 21.5-52.5 21.5Zm180 160q-31.06 0-52.56-21.44-21.5-21.45-21.5-52.5 0-31.06 21.44-52.56 21.45-21.5 52.5-21.5 31.06 0 52.56 21.44 21.5 21.45 21.5 52.5 0 31.06-21.44 52.56-21.45 21.5-52.5 21.5ZM266-101q-35 0-57.5-26.77Q186-154.53 186-191q0-48 34-81.5t66-68.5q29-32 50.5-68t49.5-68q19-21 42.64-36.5T480-529q28.83 0 53.41 15Q558-499 576-477q28 32 49 68t49 68q32 35 66 68.5t34 81.5q0 36.47-22.5 63.23Q729-101 694-101q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"/>
    </Icon>
  );
});

IconMaterialPetsW100Filled.displayName = 'OnesyIconMaterialPetsW100Filled';

export default IconMaterialPetsW100Filled;
