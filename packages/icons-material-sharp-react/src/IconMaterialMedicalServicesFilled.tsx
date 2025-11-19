import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalServicesFilled = (props: IIcon) => {

  return (
    <Icon
      name='MedicalServicesFilled'

      short_name='MedicalServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-640h240v-160h320v160h240v640H80Zm320-640h160v-80H400v80Zm40 360v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z"/>
    </Icon>
  );
};

IconMaterialMedicalServicesFilled.displayName = 'OnesyIconMaterialMedicalServicesFilled';

export default IconMaterialMedicalServicesFilled;
