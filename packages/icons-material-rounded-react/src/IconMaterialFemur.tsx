import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFemur = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Femur'

      short_name='Femur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-77q-44 0-77-27.5T278-176q-3-18-13.5-29.5T234-217q-3 0-6 .5t-5 .5q-56 11-99.5-25.5T80-335q0-42 27.5-76t72.5-42l118-21 133-191q-14-14-22-33t-8-39q0-42 28-70.5t69-28.5q26 0 44 9.5t26 15.5q9 7 20.5 10t25.5 4q8-25 25.5-44t41.5-28q44-17 85 2.5t57 61.5l51 141q17 46-4 86.5T810-524q-36 12-69 2.5T686-556h-37L494-335l21 116q11 56-25.5 99T396-77Zm0-80q19 0 31.5-14.5T436-204l-24-133q-2-8 0-15.5t7-14.5l164-235q11-16 28.5-25t37.5-9l-29-80q-30 1-55-7t-45-23q-7-5-12-7.5t-10-2.5q-8 0-12.5 6t-4.5 13q0 4 1.5 8t3.5 7q13 13 19 27.5t6 29.5q0 13-3.5 24.5T496-618L353-413q-5 7-11.5 10.5T327-397l-134 23q-14 2-23.5 13.5T160-335q0 20 15 32t33 9q7-2 13.5-2.5t12.5-.5q23 0 43.5 7.5T314-268q16 14 27 33.5t15 44.5q3 14 14.5 23.5T396-157Zm384-441q12-5 17.5-16t.5-22l-50-140q-4-12-15.5-17.5T709-794q-11 4-16.5 15t-1.5 23l51 140q5 11 16 16.5t22 1.5ZM462-485Zm283-212Z"/>
    </Icon>
  );
});

IconMaterialFemur.displayName = 'OnesyIconMaterialFemur';

export default IconMaterialFemur;
