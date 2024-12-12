import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExerciseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExerciseW100Filled'

      short_name='Exercise'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M761-585 584-762l39-39 176 178-38 38ZM334-157 156-333l43-43 177 177-42 42Zm129 5L152-463l102-102 99 100 142-142-100-99 102-104 313 313-104 102-99-100-142 142 100 99-102 102Z"/>
    </Icon>
  );
});

IconMaterialExerciseW100Filled.displayName = 'OnesyIconMaterialExerciseW100Filled';

export default IconMaterialExerciseW100Filled;
