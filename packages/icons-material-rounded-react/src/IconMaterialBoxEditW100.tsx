import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditW100'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M215-678h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Zm185 239 80-40 80 40v-211H400v211ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-417q0-10.5 3.5-20.25T186-687l66-79q8-10.62 20-16.31 12-5.69 26.15-5.69h361.7q14.15 0 26.53 5.69Q698.75-776.62 707-766l67 81q7 8.41 10.5 18.35 3.5 9.94 3.5 20.65v71q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-75H588v243l-9 9-99-49-65 32q-15 8-29-.75T372-442v-208H200v418q0 14 9 23t23 9h226q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H232Zm356-478h172-172Zm-388 0h379-379Zm372 448v-36q0-5.57 2-10.78 2-5.22 7-10.22l202-201q5-5 9.89-6.5 4.89-1.5 9.78-1.5 5.33 0 10.65 2 5.33 2 9.68 6l37 38q4 5 6 10t2 10q0 5-2 10t-6 10L659-181q-5 5-10.22 7-5.21 2-10.78 2h-36q-12.75 0-21.37-8.63Q572-189.25 572-202Zm268-200-37-38 37 38ZM600-200h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialBoxEditW100.displayName = 'OnesyIconMaterialBoxEditW100';

export default IconMaterialBoxEditW100;
