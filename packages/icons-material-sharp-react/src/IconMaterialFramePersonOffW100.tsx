import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFramePersonOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOffW100'

      short_name='FramePersonOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m852-68-64-64H640v-28h120L634-286H266v-50q0-14.61 7.54-27.48Q281.08-376.35 294-384q42-25 89.5-37.5T480-434h6L160-760v120h-28v-148l-42-42 20-20L872-88l-20 20ZM607-313l-91-91v-2q-73 0-124.5 14T294-352v39h313Zm-33-267q0 17-5.5 32.5T552-520l-20-20q7-8 10.5-18.5T546-580q0-27-19.5-46.5T480-646q-11 0-21.5 3.5T440-632l-20-20q12-11 27.5-16.5T480-674q38 0 66 28t28 66Zm254 260v76l-28-28v-48h28ZM132-132v-188h28v160h160v28H132Zm668-508v-160H640v-28h188v188h-28Zm-314 54Zm30 273ZM320-828v28h-48l-28-28h76Z"/>
    </Icon>
  );
});

IconMaterialFramePersonOffW100.displayName = 'OnesyIconMaterialFramePersonOffW100';

export default IconMaterialFramePersonOffW100;
