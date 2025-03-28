import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOralDiseaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OralDiseaseW100'

      short_name='OralDisease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-152v-288h60v-148L206-714l124-123 19 19-103 104 114 114v160h60v288H272Zm268 0v-288h60v-121q-42-5-71-37.17T500-674q0-48 33-81t81-33q48 0 81 33t33 81q0 43.66-29 75.83T628-561v121h60v288H540Zm74.37-436Q650-588 675-613.37t25-61Q700-710 674.84-735q-25.17-25-60.5-25-35.34 0-60.84 25.16-25.5 25.17-25.5 60.5 0 35.34 25.37 60.84t61 25.5ZM300-180h92v-232h-92v232Zm268 0h92v-232h-92v232Zm-268 0h92-92Zm268 0h92-92Z"/>
    </Icon>
  );
});

IconMaterialOralDiseaseW100.displayName = 'OnesyIconMaterialOralDiseaseW100';

export default IconMaterialOralDiseaseW100;
