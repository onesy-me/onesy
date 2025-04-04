import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransformW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformW100'

      short_name='Transform'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M322-611H146q-6 0-10-4t-4-10q0-6 4-10t10-4h176v-169l-80 78q-5 4-10 4.5t-10-4.5q-5-5-5-10t5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5T450-730q-4 4-9.5 4t-10.5-4l-80-78v425q0 12 10 22t22 10h432q6 0 10 4t4 10q0 6-4 10t-10 4H638v171l80-78q5-4 10-4.5t10 4.5q5 5 5 10t-5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-9.5T510-230q4-4 9.5-4t10.5 4l80 78v-171H382q-26 0-43-17t-17-43v-228Zm288 180v-148q0-12-10-22t-22-10H430v-28h148q26 0 43 17t17 43v148h-28Z"/>
    </Icon>
  );
});

IconMaterialTransformW100.displayName = 'OnesyIconMaterialTransformW100';

export default IconMaterialTransformW100;
