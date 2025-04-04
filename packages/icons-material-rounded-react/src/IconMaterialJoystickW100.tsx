import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoystickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoystickW100'

      short_name='Joystick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m216-408 248 143q8 5 16 5t16-5l247-143-249-144v126h-28v-126L216-408Zm250-176v-57q-32-5-53-29.74-21-24.73-21-57.26 0-37 25.5-62.5T480-816q37 0 62.5 25.5T568-728q0 32.53-21 57.26Q526-646 494-641v57l264 152q14.25 8.17 22.13 21.91Q788-396.34 788-380v40q0 16.34-7.87 30.09Q772.25-296.17 758-288L510-145q-14.33 8-30.16 8-15.84 0-29.84-8L202-288q-14.25-8.17-22.12-21.91Q172-323.66 172-340v-40q0-16.34 7.88-30.09Q187.75-423.83 202-432l264-152Zm-16 343L200-385v45q0 8 4 15.5t12 12.5l248 143q8 5 16 5t16-5l248-143q8-5 12-12.5t4-15.5v-45L510-241q-14.33 8-30.16 8-15.84 0-29.84-8Zm30-427q25 0 42.5-17.5T540-728q0-25-17.5-42.5T480-788q-25 0-42.5 17.5T420-728q0 25 17.5 42.5T480-668Zm-6 504Z"/>
    </Icon>
  );
});

IconMaterialJoystickW100.displayName = 'OnesyIconMaterialJoystickW100';

export default IconMaterialJoystickW100;
