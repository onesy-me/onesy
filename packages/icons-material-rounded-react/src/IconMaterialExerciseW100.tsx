import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExerciseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExerciseW100'

      short_name='Exercise'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m761-585-19-19 16-17q10-10 10-22.5T758-666l-92-92q-10-10-22.5-10T621-758l-17 16-20-20 20-21q16-16 39-15.5t39 16.5l100 100q16 16 16 38.5T782-605l-21 20ZM356-179q-16 16-38.5 16T279-179l-96-96q-17-17-17-42.5t17-42.5l16-16 20 20-16 16q-10 10-10 22.5t10 22.5l92 92q10 10 22.5 10t22.5-10l16-16 20 20-20 20Zm387-253 42-42q10-10 10-23t-10-23L520-785q-10-10-23-10t-23 10l-42 42q-10 10-10 22.5t10 22.5l266 266q10 10 22.5 10t22.5-10ZM486-175l42-42q10-10 10-22.5T528-262L262-528q-10-10-22.5-10T217-528l-42 42q-10 10-10 23t10 23l265 265q10 10 23 10t23-10Zm-35-204 130-130-72-72-130 130 72 72Zm54 224q-17 17-42 17t-42-17L155-421q-17-17-17-42t17-42l42-43q17-17 42.5-17t42.5 17l77 77 130-130-77-77q-17-17-17-42.5t17-42.5l43-43q17-17 42.5-17t42.5 17l266 266q17 17 17 42.5T806-455l-43 43q-17 17-42.5 17T678-412l-77-77-130 130 77 77q17 17 17 42.5T548-197l-43 42Z"/>
    </Icon>
  );
});

IconMaterialExerciseW100.displayName = 'OnesyIconMaterialExerciseW100';

export default IconMaterialExerciseW100;
