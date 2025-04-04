import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMilitaryTechW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechW100'

      short_name='MilitaryTech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-230-48 37q-9 7-17.5.5T409-210l19-60-47-33q-9-6-5.5-16.5T390-330h56l30-96-134-78q-20-11-31-30.5T300-576v-214q0-25 17.5-42.5T360-850h240q25 0 42.5 17.5T660-790v214q0 21-12 39.5T616-506l-132 80 30 96h56q11 0 14.5 10.5T579-303l-47 33 19 60q3 11-5.5 17.5T528-193l-48-37ZM328-790v214q0 15 7.5 27.5T356-528l110 64v-358H360q-14 0-23 9t-9 23Zm272-32H494v358l110-64q13-8 20.5-20.5T632-576v-214q0-14-9-23t-23-9ZM480-639Zm-14-4Zm28 0Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechW100.displayName = 'OnesyIconMaterialMilitaryTechW100';

export default IconMaterialMilitaryTechW100;
