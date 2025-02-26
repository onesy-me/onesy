import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffFilled'

      short_name='LocationOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 627-220q-32 34-68 69t-79 71Q319-217 239.5-334.5T160-552q0-32 5-61t14-55L27-820l57-57L876-85l-57 57Zm-91-319L551-524q5-8 7-17t2-19q0-33-23.5-56.5T480-640q-10 0-19 2t-17 7L271-804q43-37 97-56.5T480-880q127 0 223.5 89T800-552q0 48-18 98.5T728-347Z"/>
    </Icon>
  );
});

IconMaterialLocationOffFilled.displayName = 'OnesyIconMaterialLocationOffFilled';

export default IconMaterialLocationOffFilled;
