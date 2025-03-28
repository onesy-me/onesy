import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExercise = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Exercise'

      short_name='Exercise'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m826-585-56-56 30-31-128-128-31 30-57-57 86-88 244 244-88 86ZM48-290l86-86 57 57-31 30 129 129 30-31 57 57-86 86L48-290Zm695-150 57-57-303-303-57 57 303 303ZM463-160l57-58-302-302-58 57 303 303Zm-6-234 110-109-64-64-109 110 63 63Zm177 176L463-47 47-463l171-171 119 120 110-110-120-119 170-170 416 416-170 170-119-120-110 110 120 119Z"/>
    </Icon>
  );
});

IconMaterialExercise.displayName = 'OnesyIconMaterialExercise';

export default IconMaterialExercise;
