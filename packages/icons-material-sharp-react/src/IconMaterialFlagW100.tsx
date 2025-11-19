import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlagW100 = (props: IIcon) => {

  return (
    <Icon
      name='FlagW100'

      short_name='Flag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-146v-602h266l16 80h214v296H562l-16-80H280v306h-28Zm248-414Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/>
    </Icon>
  );
};

IconMaterialFlagW100.displayName = 'OnesyIconMaterialFlagW100';

export default IconMaterialFlagW100;
