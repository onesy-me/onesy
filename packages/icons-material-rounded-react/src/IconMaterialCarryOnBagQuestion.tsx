import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarryOnBagQuestion = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagQuestion'

      short_name='CarryOnBagQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200v-400h-40v400h40Zm-40 80q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h240v-120h-40q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h80q17 0 28.5 11.5T640-840v307q0 17-11.5 28.5T600-493q-17 0-28.5-11.5T560-533v-67H440v400h1q17 0 28.5 11.5T481-160q0 17-11.5 28.5T441-120H320Zm400-320q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Zm0 320q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120ZM400-400Zm-40 200v-400 400Zm80 0v-400 400Zm348-96q0-29-19-46.5T720-360q-19 0-35 9.5T659-325q-4 6-1 12.5t10 9.5q6 3 12 0t11-8q5-7 12.5-11t16.5-4q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14q0 8 5 13t13 5q8 0 13-5t5-13q0-8 6-16t14-16q14-12 22-23t8-31Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagQuestion.displayName = 'OnesyIconMaterialCarryOnBagQuestion';

export default IconMaterialCarryOnBagQuestion;
