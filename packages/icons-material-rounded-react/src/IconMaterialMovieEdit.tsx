import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEdit'

      short_name='MovieEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-320 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h120q33 0 56.5 23.5T880-720v120q0 17-11.5 28.5T840-560H160v320h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm400 0v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L695-132q-6 6-13.5 9t-15.5 3h-66q-17 0-28.5-11.5T560-160Zm300-223-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
});

IconMaterialMovieEdit.displayName = 'OnesyIconMaterialMovieEdit';

export default IconMaterialMovieEdit;
