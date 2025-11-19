import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardDriveFilled = (props: IIcon) => {

  return (
    <Icon
      name='HardDriveFilled'

      short_name='HardDrive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-320q25 0 42.5-17t17.5-43q0-25-17.5-42.5T680-440q-26 0-43 17.5T620-380q0 26 17 43t43 17ZM80-600l136-136q11-11 25.5-17.5T273-760h413q17 0 31.5 6.5T743-736l137 136H80Zm80 400q-34 0-57-23t-23-57v-240h800v240q0 34-23.5 57T800-200H160Z"/>
    </Icon>
  );
};

IconMaterialHardDriveFilled.displayName = 'OnesyIconMaterialHardDriveFilled';

export default IconMaterialHardDriveFilled;
