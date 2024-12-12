import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoMealsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsFilled'

      short_name='NoMeals'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m819-28-59-59v7h-80v-87L27-820l57-57L876-85l-57 57Zm-59-287-83-83-117-117v-165q0-83 58.5-141.5T760-880v565ZM480-595l-80-80v-205h80v285ZM360-715l-80-80v-85h80v165ZM240-835l-45-45h45v45Zm40 755v-366q-51-14-85.5-56T160-600v-201l80 80v121h40v-81l81 80 90 91q-16 23-39.5 39.5T360-446v366h-80Z"/>
    </Icon>
  );
});

IconMaterialNoMealsFilled.displayName = 'OnesyIconMaterialNoMealsFilled';

export default IconMaterialNoMealsFilled;
