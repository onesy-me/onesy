import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPsychiatryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychiatryW100'

      short_name='Psychiatry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-146v-315q-54 0-103-20t-87-58q-38-38-57.5-87.6Q199-676.2 199-730v-28h28q52.69 0 102.03 20.59T416-679q32 32 51.5 73.5T492-518q10-20 22.5-37.5T543-589q37.86-37.82 87.51-58.41Q680.15-668 734-668h28v28q0 53.88-20.62 103.56-20.62 49.67-58.5 87.55Q645-411 596.5-391.5 548-372 494-372v226h-28Zm1-344q0-48-18.5-91.5T396-659q-34-34-77.5-52.5T227-730q0 48 18 92t52 78q34 34 78 52t92 18Zm27 90q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T564-569q-34 34-52 77.5T494-400Zm0 0Zm-27-90Z"/>
    </Icon>
  );
});

IconMaterialPsychiatryW100.displayName = 'OnesyIconMaterialPsychiatryW100';

export default IconMaterialPsychiatryW100;
