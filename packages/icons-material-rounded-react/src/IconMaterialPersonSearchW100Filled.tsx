import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearchW100Filled'

      short_name='PersonSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-512q-45 0-76.5-31.5T332-620q0-45 31.5-76.5T440-728q45 0 76.5 31.5T548-620q0 45-31.5 76.5T440-512Zm388 400-90-90q-19 14-39 20t-39 6q-52 0-88-36t-36-88q0-52 36-88t88-36q52 0 88 36t36 88q0 19-6 39t-20 39l90 90q4 4 4.5 9.5T848-112q-5 5-10 5t-10-5Zm-168-92q41 0 68.5-27.5T756-300q0-41-27.5-68.5T660-396q-41 0-68.5 27.5T564-300q0 41 27.5 68.5T660-204Zm-458-28q-13 0-21.5-8.5T172-262v-22q0-23 13.5-41.5T222-356q37-19 98.5-36.5T454-408q11 0 17 9.5t2 20.5q-8 20-12.5 40.5T456-296q0 9 1 18t3 18q2 11-4.5 19.5T438-232H202Z"/>
    </Icon>
  );
});

IconMaterialPersonSearchW100Filled.displayName = 'OnesyIconMaterialPersonSearchW100Filled';

export default IconMaterialPersonSearchW100Filled;
