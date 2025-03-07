import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareW100'

      short_name='EditSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h295q7 0 10.5 4.5t3.5 9.5q0 5-3.5 9.5T527-760H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h496q12 0 22-10t10-22v-300q0-7 4.5-10.5t9.5-3.5q5 0 9.5 3.5T788-532v300q0 26-17 43t-43 17H232Zm248-308Zm-68 38v-30q0-12 5-23.5t13-19.5l337-337q5-5 10-6.5t11-1.5q5 0 10 1.5t9 5.5l41 39q5 5 7.5 11t2.5 12q0 6-1.5 11t-6.5 10L510-430q-8 8-19.5 13t-23.5 5h-25q-13 0-21.5-8.5T412-442Zm418-348-41-44 41 44ZM440-440h40l277-277-20-20-23-22-274 274v45Zm297-297-23-22 23 22 20 20-20-20Z"/>
    </Icon>
  );
});

IconMaterialEditSquareW100.displayName = 'OnesyIconMaterialEditSquareW100';

export default IconMaterialEditSquareW100;
