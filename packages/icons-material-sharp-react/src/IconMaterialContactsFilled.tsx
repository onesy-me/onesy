import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactsFilled = (props: IIcon) => {

  return (
    <Icon
      name='ContactsFilled'

      short_name='Contacts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-40v-80h640v80H160Zm0-800v-80h640v80H160Zm320 400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM80-160v-640h800v640H80Zm150-80h500q-45-56-109-88t-141-32q-77 0-141 32t-109 88Z"/>
    </Icon>
  );
};

IconMaterialContactsFilled.displayName = 'OnesyIconMaterialContactsFilled';

export default IconMaterialContactsFilled;
