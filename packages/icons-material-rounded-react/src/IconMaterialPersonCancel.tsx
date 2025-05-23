import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonCancel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonCancel'

      short_name='PersonCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-523-56 55q-11 11-27.5 11.5T668-468q-11-11-11-28t11-28l55-56-55-55q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l55 55 55-56q11-12 27.5-12t28.5 12q12 12 12 28.5T891-635l-55 55 56 56q12 12 11.5 28T891-468q-12 11-28 11.5T835-468l-55-55Zm-420 43q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-240v-32q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240Zm80 0h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/>
    </Icon>
  );
});

IconMaterialPersonCancel.displayName = 'OnesyIconMaterialPersonCancel';

export default IconMaterialPersonCancel;
