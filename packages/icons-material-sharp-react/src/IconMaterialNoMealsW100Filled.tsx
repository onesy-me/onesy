import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoMealsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsW100Filled'

      short_name='NoMeals'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 694-226v120h-28v-148L90-830l20-20L872-88l-20 20ZM694-378l-28-28v-20h-20l-72-72v-182q0-62 31.5-117t88.5-55v474ZM442-630l-28-28v-196h28v224ZM334-738l-28-28v-88h28v116ZM226-846l-8-8h8v8Zm80 740v-360q-45-5-76.5-38.5T198-588v-174l28 28v146h80v-66l28 28v38h38l57 57q-14 27-39 44.5T334-466v360h-28Z"/>
    </Icon>
  );
});

IconMaterialNoMealsW100Filled.displayName = 'OnesyIconMaterialNoMealsW100Filled';

export default IconMaterialNoMealsW100Filled;
