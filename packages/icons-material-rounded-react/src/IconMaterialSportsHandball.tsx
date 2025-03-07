import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsHandball = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHandball'

      short_name='SportsHandball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m350-292-40 69q-8 14-24.5 18.5T255-208q-14-8-18.5-24.5T240-263l186-321q-38-39-57-89t-19-103q0-26 4.5-52.5T370-880q6-15 22-19.5t30 3.5q14 8 18.5 24t-.5 32q-5 15-7.5 30.5T430-778q0 53 26 99.5t74 74.5l90 52q62 36 91 103.5T740-322q0 27-5 53.5T720-217q-6 16-22 20.5t-31-3.5q-14-8-19-24t0-33q5-16 7.5-31.5T658-320q0-32-9-62t-29-56L388-39q-8 14-24.5 18.5T333-24q-14-8-18.5-24.5T318-79l100-173-68-40Zm290-308q-33 0-56.5-23.5T560-680q0-33 23.5-56.5T640-760q33 0 56.5 23.5T720-680q0 33-23.5 56.5T640-600ZM540-800q-26 0-43-18t-17-42q0-26 18-43t42-17q26 0 43 18t17 42q0 26-18 43t-42 17Z"/>
    </Icon>
  );
});

IconMaterialSportsHandball.displayName = 'OnesyIconMaterialSportsHandball';

export default IconMaterialSportsHandball;
