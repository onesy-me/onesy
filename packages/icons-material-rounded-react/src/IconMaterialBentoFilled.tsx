import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBentoFilled = (props: IIcon) => {

  return (
    <Icon
      name='BentoFilled'

      short_name='Bento'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-520v-240h160q33 0 56.5 23.5T880-680v160H640ZM160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h400v560H160Zm160-220q25 0 42.5-17.5T380-480q0-25-17.5-42.5T320-540q-25 0-42.5 17.5T260-480q0 25 17.5 42.5T320-420Zm320 220v-240h240v160q0 33-23.5 56.5T800-200H640Z"/>
    </Icon>
  );
};

IconMaterialBentoFilled.displayName = 'OnesyIconMaterialBentoFilled';

export default IconMaterialBentoFilled;
