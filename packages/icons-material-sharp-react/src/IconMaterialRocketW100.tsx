import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketW100'

      short_name='Rocket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m267-194 105-43q-14-42-23.5-85.5T335-411l-54 36q-7 5-10.5 11.5T267-349v155Zm133-46h160q18-51 29-108.5T600-469q0-88-26-160.5T480-780q-68 78-94 150.5T360-469q0 63 11 120.5T400-240Zm80-226q-23 0-38.5-15.5T426-520q0-23 15.5-38.5T480-574q23 0 38.5 15.5T534-520q0 23-15.5 38.5T480-466Zm213 272v-154q0-8-3.5-15T679-375l-54-36q-4 45-16 99t-21 76l105 42ZM480-818q78 74 113 160.5T628-468q0 6 .5 12.5T628-442l65 44q13 8 20.5 21.5T721-348v195l-147-59H385l-146 59v-196q0-15 7-28.5t20-21.5l66-44v-25q0-103 35-189.5T480-818Z"/>
    </Icon>
  );
});

IconMaterialRocketW100.displayName = 'OnesyIconMaterialRocketW100';

export default IconMaterialRocketW100;
