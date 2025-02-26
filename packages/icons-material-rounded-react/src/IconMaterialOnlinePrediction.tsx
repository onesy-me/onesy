import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnlinePrediction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnlinePrediction'

      short_name='OnlinePrediction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M140-480q0 63 21 117.5t58 99.5q8 10 8.5 23t-8.5 22q-9 9-22.5 8T174-222q-45-53-69.5-118.5T80-480q0-74 24.5-139.5T174-738q9-11 22.5-11.5T219-741q9 9 8.5 21.5T219-697q-37 45-58 99.5T140-480Zm120 0q0 38 11.5 71.5T304-347q8 11 8 23t-9 21q-9 9-21 8.5T262-305q-29-36-45.5-80.5T200-480q0-50 16.5-94.5T262-655q8-10 20-10.5t21 8.5q9 9 9 21t-8 23q-21 28-32.5 61.5T260-480Zm180 180q0-23-15.5-45.5t-34.5-47q-19-24.5-34.5-51T340-500q0-58 41-99t99-41q58 0 99 41t41 99q0 30-15.5 56.5t-34.5 51q-19 24.5-34.5 47T520-300h-80Zm0 60v-20h80v20q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240Zm260-240q0-38-11.5-71.5T656-613q-8-11-8-23t9-21q9-9 21-8.5t20 10.5q29 36 45.5 80.5T760-480q0 50-16.5 94.5T698-305q-8 10-20 10.5t-21-8.5q-9-9-9-21t8-23q21-28 32.5-61.5T700-480Zm120 0q0-63-21-117.5T741-697q-8-10-8.5-23t8.5-22q9-9 22.5-8t22.5 12q45 53 69.5 118.5T880-480q0 74-24.5 139.5T786-222q-9 11-22.5 11.5T741-219q-9-9-8.5-21.5T741-263q37-45 58-99.5T820-480Z"/>
    </Icon>
  );
});

IconMaterialOnlinePrediction.displayName = 'OnesyIconMaterialOnlinePrediction';

export default IconMaterialOnlinePrediction;
