import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSos = (props: IIcon) => {

  return (
    <Icon
      name='Sos'

      short_name='Sos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-280v-400h280v400H340Zm-300 0v-80h160v-80H40v-240h240v80H120v80h160v240H40Zm640 0v-80h160v-80H680v-240h240v80H760v80h160v240H680Zm-260-80h120v-240H420v240Z"/>
    </Icon>
  );
};

IconMaterialSos.displayName = 'OnesyIconMaterialSos';

export default IconMaterialSos;
