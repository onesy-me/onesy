import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnsen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Onsen'

      short_name='Onsen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M231-597q-22-29-35.5-63T182-731v-14q0-7 1-14 2-17 12.5-29t27.5-12q18 0 30 12t10 29q-1 6-1.5 12.5T261-734q0 31 15 58t34 52q21 29 35 61t14 67v15q-1 17-12 29t-28 12q-17 0-29.5-11.5T279-480q1-5 1-9v-9q0-29-16-52.5T231-597Zm160 0q-22-29-35.5-63T342-731v-14q0-7 1-14 2-17 12.5-29t27.5-12q18 0 30 12t10 29q-1 6-1.5 12.5T421-734q0 31 15 58t34 52q21 29 35 61t14 67v15q-1 17-12 29t-28 12q-17 0-29.5-11.5T439-480q1-5 1-9v-9q0-29-16-52.5T391-597Zm160 0q-22-29-35.5-63T502-731v-14q0-7 1-14 2-17 12.5-29t27.5-12q18 0 30 12t10 29q-1 6-1.5 12.5T581-734q0 31 15 58t34 52q21 29 35 61t14 67v15q-1 17-12 29t-28 12q-17 0-29.5-11.5T599-480q1-5 1-9v-9q0-29-16-52.5T551-597Zm-71 437q-149 0-254.5-58.5T120-360q0-43 31-81.5t89-67.5v93q-20 14-30 28.5T200-360q0 45 87 82.5T480-240q106 0 193-37.5t87-82.5q0-13-10-27.5T720-416v-93q58 29 89 67.5t31 81.5q0 83-105 141.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialOnsen.displayName = 'OnesyIconMaterialOnsen';

export default IconMaterialOnsen;
