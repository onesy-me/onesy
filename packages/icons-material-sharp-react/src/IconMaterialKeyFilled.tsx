import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyFilled = (props: IIcon) => {

  return (
    <Icon
      name='KeyFilled'

      short_name='Key'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 120q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 46T506-560h335l79 79-140 160-100-79-80 80-80-80h-14q-25 72-87 116t-139 44Z"/>
    </Icon>
  );
};

IconMaterialKeyFilled.displayName = 'OnesyIconMaterialKeyFilled';

export default IconMaterialKeyFilled;
