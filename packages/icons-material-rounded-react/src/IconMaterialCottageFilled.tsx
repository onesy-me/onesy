import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCottageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageFilled'

      short_name='Cottage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-295l-40 31q-14 10-30 8t-26-16q-10-14-8-30t15-26l89-68v-84q0-17 11.5-28.5T200-720q17 0 28.5 11.5T240-680v23l191-146q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l360 275q13 10 15 26t-8 30q-10 13-26 15t-29-8l-41-30v295q0 33-23.5 56.5T720-120H540q-8 0-14-6t-6-14v-180q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320v180q0 8-6 14t-14 6H240q-33 0-56.5-23.5T160-200Zm52-560q-23 0-35.5-19t-1.5-39q17-29 44.5-45.5T280-880q11 0 21-5.5t15-15.5q5-9 13.5-14t19.5-5q23 0 35 19t1 39q-17 29-44.5 45.5T280-800q-11 0-21 5t-15 16q-5 9-13 14t-19 5Z"/>
    </Icon>
  );
});

IconMaterialCottageFilled.displayName = 'OnesyIconMaterialCottageFilled';

export default IconMaterialCottageFilled;
