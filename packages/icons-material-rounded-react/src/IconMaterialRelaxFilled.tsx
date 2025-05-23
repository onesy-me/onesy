import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRelaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RelaxFilled'

      short_name='Relax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-18 0-34.5-6.5T416-146L148-415q-14-14-25.5-30.5T103-480h372q17 0 28.5 11.5T515-440q0 17-11.5 28.5T475-400q-7 0-13.5-2t-11.5-6q-13-10-29-7.5T395-400q-10 13-8 29t15 26q16 11 34.5 18t38.5 7q50 0 85-35t35-85q0-11-2-20.5t-5-19.5h47q50 0 85-35t35-85q0-50-35-85t-85-35q-20 0-38.5 6T562-696q-13 10-15 26.5t8 29.5q10 13 26 15.5t29-7.5q5-4 11.5-6t13.5-2q17 0 28.5 11.5T675-600q0 17-11.5 28.5T635-560H82q-1-8-1.5-14.5T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Z"/>
    </Icon>
  );
});

IconMaterialRelaxFilled.displayName = 'OnesyIconMaterialRelaxFilled';

export default IconMaterialRelaxFilled;
