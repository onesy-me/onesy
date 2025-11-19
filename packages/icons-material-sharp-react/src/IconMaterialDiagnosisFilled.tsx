import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiagnosisFilled = (props: IIcon) => {

  return (
    <Icon
      name='DiagnosisFilled'

      short_name='Diagnosis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200h320v-80H320v80Zm0-120h320v-80H320v80Zm160-148q66-60 113-106.5t47-97.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-728q-12-15-31.5-23.5T408-760q-36 0-62 26t-26 62q0 51 45.5 96T480-468ZM160-80v-800h640v800H160Z"/>
    </Icon>
  );
};

IconMaterialDiagnosisFilled.displayName = 'OnesyIconMaterialDiagnosisFilled';

export default IconMaterialDiagnosisFilled;
