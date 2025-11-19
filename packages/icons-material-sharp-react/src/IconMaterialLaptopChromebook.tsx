import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopChromebook = (props: IIcon) => {

  return (
    <Icon
      name='LaptopChromebook'

      short_name='LaptopChromebook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-160v-80h80v-600h800v600h80v80H0Zm400-80h160v-40H400v40ZM160-360h640v-400H160v400Zm320-200Z"/>
    </Icon>
  );
};

IconMaterialLaptopChromebook.displayName = 'OnesyIconMaterialLaptopChromebook';

export default IconMaterialLaptopChromebook;
