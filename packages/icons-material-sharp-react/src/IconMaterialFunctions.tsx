import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFunctions = (props: IIcon) => {

  return (
    <Icon
      name='Functions'

      short_name='Functions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160v-80l260-240-260-240v-80h480v120H431l215 200-215 200h289v120H240Z"/>
    </Icon>
  );
};

IconMaterialFunctions.displayName = 'OnesyIconMaterialFunctions';

export default IconMaterialFunctions;
