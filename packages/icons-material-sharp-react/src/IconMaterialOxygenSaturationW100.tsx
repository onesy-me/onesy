import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOxygenSaturationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturationW100'

      short_name='OxygenSaturation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-400h28v134q0 27 19.5 46.5T186-200h80v-40h120v-80h28v80h132v-80h28v80h120v40h81q27 0 46.5-19.5T841-266v-134h28v134q0 39.17-27.42 66.58Q814.17-172 775-172h-81v40H266v-40h-80q-39.17 0-66.58-27.42Q92-226.83 92-266v-134Zm280-469h28v188h-94q-45 0-75.5 30.5T200-576q0 37 23 65.5t57 37.5v28q-47-8-77.5-45T172-576q0-56 39-94.5t95-38.5h66v-160Zm188 0h28v160h66q56 0 95 38.5t39 94.5q0 49-30.5 86T680-445v-28q34-9 57-37.5t23-65.5q0-44-30.5-74.5T654-681h-94v-188Zm-80 424Zm-11 45q-35.47 0-64.09-20.56Q376.29-441.13 365-475q-7-20-24.5-32.5T302-520h-22v-28h22q30.21 0 54.6 17.5Q381-513 391-484q8 25 29.88 40.5Q442.75-428 469-428h22q26.25 0 48.13-15.5Q561-459 569-484q10-29 34.4-46.5Q627.79-548 658-548h22v28h-22q-21 0-38.64 12.5T595-475q-11.29 33.87-39.91 54.44Q526.47-400 491-400h-22Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturationW100.displayName = 'OnesyIconMaterialOxygenSaturationW100';

export default IconMaterialOxygenSaturationW100;
