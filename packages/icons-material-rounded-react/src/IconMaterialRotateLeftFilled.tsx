import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotateLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeftFilled'

      short_name='RotateLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M170-478q-21 0-33.5-15t-7.5-35q6-25 16-48t23-45q10-17 29.5-19t34.5 12q9 9 11 22.5t-5 24.5q-10 17-17.5 35.5T208-508q-3 13-14.5 21.5T170-478Zm268 348q0 22-15 34t-35 7q-24-7-47-16.5T295-128q-17-10-19-29.5t12-34.5q9-9 22.5-11t24.5 5q17 10 35.5 17.5T408-168q13 3 21.5 14.5T438-130ZM232-248q-15 14-34.5 12T168-255q-13-23-22.5-46T129-348q-5-20 7-35t34-15q13 0 24 8.5t14 21.5q5 19 12.5 37.5T238-295q7 11 5 25t-11 22ZM567-90q-20 5-34.5-7T518-130q0-13 8.5-24t21.5-14q92-24 151-98.5T758-438q0-117-81.5-198.5T478-718h-8l36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L346-730q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l103-104q12-11 29-11t28 11q12 12 12 29t-11 28l-35 35h6q150 0 255 105t105 255q0 124-76 220T567-90Z"/>
    </Icon>
  );
});

IconMaterialRotateLeftFilled.displayName = 'OnesyIconMaterialRotateLeftFilled';

export default IconMaterialRotateLeftFilled;
